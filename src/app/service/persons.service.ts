import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Character } from '../interface/GameOfThrones.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Character[]> {
    const charactersUrl = `${this.apiUrl}/characters`;
    return this.http.get<Character[]>(charactersUrl).pipe(
      catchError((error: any) => {
        console.log('Error fetching Characters', error);
        return of([]);
      })
    );
  }

  getPersonBySlug(slug: string): Observable<Character[]> {
    const characterUrl = `${this.apiUrl}/character/${slug}`;
    return this.http.get<Character[]>(characterUrl).pipe(
      catchError((error: any) => {
        console.log('Error fetching Character', error);
        return of([]);
      })
    );
  }
}
