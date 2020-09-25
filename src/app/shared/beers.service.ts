import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Beer } from './beer.model';

@Injectable({ providedIn: 'root' })
export class BeersService {
  beerSelected = new EventEmitter<Beer>();

  constructor(private http: HttpClient) {}

  fetchBeerByFood(food: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('per_page', '4');
    searchParams = searchParams.append('food', food);
    return this.fetchBeers(false, searchParams);
  }

  fetchBeerByType(type: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('per_page', '4');
    searchParams = searchParams.append('beer_name', type);
    return this.fetchBeers(false, searchParams);
  }

  fetchRandomBeer() {
    return this.fetchBeers(true);
  }

  fetchBeerById(id: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('ids', id);
    return this.fetchBeers(false, searchParams);
  }

  fetchBeers(random?: boolean, searchParams?: HttpParams) {
    let url: string;
    if (random) {
      url = 'https://api.punkapi.com/v2/beers/random';
    } else {
      url = 'https://api.punkapi.com/v2/beers/';
    }
    return this.http
      .get<{ [key: number]: Beer }>(url,
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
