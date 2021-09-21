import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Message} from '../models/message';
import { catchError, retry } from 'rxjs/operators';
import { AppSettings } from '../appSettings';
import 'rxjs/add/operator/map';
import { messages } from 'app/mock-api/apps/chat/data';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
      return this.http.get(AppSettings.API_ENDPOINT)
          .map(response => response.json())
          .map((messages: Object[]) => {
              return messages.map(message => this.parseData(message));
          });
          console.log(response.json())
          console.log(messages)
          
  }

  private parseData(data): Message {
      return new Message(data);
  }
}
