import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import { environment } from '../../../src/environments/environment.development';

const handler: Handler = async (event) => {
  // Check if the request method is POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the request body to get data sent from the client
    const requestBody = JSON.parse(event.body || '{}');

    // Send the POST request to the target API
    const response = await fetch(environment.baseApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // You can add additional headers here if required by the API
      },
      body: JSON.stringify(requestBody),
    });

    // Handle response from the target API
    const responseData = await response.json();

    return {
      statusCode: response.ok ? 200 : response.status,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    console.error('Error making the POST request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

export { handler };
