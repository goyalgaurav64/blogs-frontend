import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  private apiUrl = 'https://cors-anywhere.herokuapp.com/http://ngx-mail-sender.ap-1.evennode.com/sendMail';

  constructor(private http: HttpClient) { }

  sendMail( emailData: any): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
   }
}
