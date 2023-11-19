import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private apiUrl = 'https://api.gameofthronesquotes.xyz/v1/';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<any[]> {
    const houseUrl = `${this.apiUrl}/houses`;
    return this.http.get<House[]>(this.apiUrl);
  }

  getHouseBySlug(slug: string): Observable<any> {
    const houseUrl = `${this.apiUrl}/houses/${slug}`;
    return this.http.get<House>(houseUrl);
  }
}
