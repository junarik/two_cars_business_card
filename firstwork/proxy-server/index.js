const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware для додавання заголовків до всіх відповідей
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api', createProxyMiddleware({
  target: 'https://twocars.salesdrive.me',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
}));

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});