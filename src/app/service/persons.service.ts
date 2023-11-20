import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interface/GameOfThrones.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Character[]> {
    const charactersUrl = `${this.apiUrl}/characters`;
    return this.http.get<Character[]>(charactersUrl);
  }

  getPersonBySlug(slug: string): Observable<Character[]> {
    const characterUrl = `${this.apiUrl}/character/${slug}`;
    return this.http.get<Character[]>(characterUrl);
  }
}
