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
    const url = '/.netlify/functions/submit-ticket';

    const requestBody = {
      form: environment.crmApikey,
      fName: name,
      phone: phoneNumber,
      prodex24source: "Веб-сайт TWOCARS",
      getResultData: 1,
    };

    return this.httpClient.post(url, requestBody);
  }

  assignTicketToAdminUser(ticketId: number): Observable<any> {
    const url = '/.netlify/functions/update-ticket';
    const salesDriveAdminManagerId = 2;

    const requestBody = {
      form: environment.crmApikey,
      id: ticketId,
      data: {
        salesdrive_manager: salesDriveAdminManagerId
      }
    };

    return this.httpClient.post(url, requestBody);
  }
}