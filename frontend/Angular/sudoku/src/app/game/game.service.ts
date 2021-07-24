import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }


  quoteUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';
  getQuote(){
    return this.http.get<any>(this.quoteUrl);
  }
}
