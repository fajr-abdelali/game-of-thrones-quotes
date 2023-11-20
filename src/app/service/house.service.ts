import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { House } from '../interface/GameOfThrones.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]> {
    const houseUrl = `${this.apiUrl}/houses`;
    return this.http.get<House[]>(houseUrl).pipe(
      catchError((error: any) => {
        console.log('Error fetching Houses', error);
        return of([]);
      })
    );
  }

  getHouseBySlug(slug: string): Observable<House[]> {
    const houseUrl = `${this.apiUrl}/house/${slug}`;
    return this.http.get<House[]>(houseUrl).pipe(
      catchError((error: any) => {
        console.log('Error fetching House', error);
        return of([]);
      })
    );
  }
}
