import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Beer } from './beer.model';

@Injectable({ providedIn: 'root' })
export class BeersService {
  beerSelected = new EventEmitter<Beer>();

  constructor(private http: HttpClient) {}

  fetchBeerByFood() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('per_page', '4');
    searchParams = searchParams.append('food', 'chicken');
    return this.fetchBeers(searchParams);
  }

  fetchBeerByType() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('per_page', '4');
    searchParams = searchParams.append('beer_name', 'porter');
    return this.fetchBeers(searchParams);
  }

  fetchBeers(searchParams: HttpParams) {
    return this.http
      .get<{ [key: number]: Beer }>('https://api.punkapi.com/v2/beers/',
      {
        params: searchParams,
        responseType: 'json'
      }).pipe(
        map(responseData => {
          const beersArray: Beer[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              beersArray.push({ ...responseData[key]});
            }
          }
          return beersArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
