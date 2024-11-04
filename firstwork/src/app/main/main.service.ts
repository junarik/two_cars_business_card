import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private httpClient: HttpClient) {
  }

  submitTicketToCrm(name: string, phoneNumber: string): Observable<any> {
    const url = '/.netlify/functions/node-fetch';
    const requestBody = {
      form: environment.crmApikey,
      fName: name,
      phone: phoneNumber,
      getResultData: 1,
    };
  
    return this.httpClient.post(url, requestBody);
  }
}