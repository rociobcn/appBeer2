import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environments } from 'src/environments/environtments';
import { Beer } from '../interfaces/beer.interface';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getBeers(startIndex: number, limit: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers?page=${startIndex}&per_page=${limit}`);
  }

  getBeerById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/beers/' + id).pipe(
      catchError((error) => of(undefined))
    );
  }

  getSuggestions( query: string ): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers?beer_name=${ query }&per_page=7`);
  }

}
