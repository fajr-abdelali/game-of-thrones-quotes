import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Quote } from '../interface/GameOfThrones.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1';

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    const quotesUrl = `${this.apiUrl}/random/5`;
    return this.http.get<Quote[]>(quotesUrl).pipe(
      catchError((error:any)=>{
        console.log('Error fetching Quotes',error);
        return of([]);
      })
    );
  }
}
