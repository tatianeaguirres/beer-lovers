import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Beer } from './beer.model';

@Injectable({ providedIn: 'root' })
export class BeersService {

  readonly beersUrl = 'https://api.punkapi.com/v2/beers/';
  readonly randomBeerUrl = `${this.beersUrl}random`;

  constructor(private http: HttpClient) {}

  /** GET random beer from the server. */
  getRandomBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.randomBeerUrl)
    .pipe(
      map(beer => {
        return beer ? Object.assign([], beer) : null;
      }),
      tap(beer => this.log(`fetched random beer`)),
      catchError(this.handleError('getRandomBeer'))
    ) as Observable<Beer[]>;
  }

  /**
   * GET beers whose contains search term.
   * @param param - name of the URL parameter filter
   * @param term - name of the operation that failed
   * @param perPage - name of the term associated with the URL filter parameter above
   */
  searchBeers(param: string, term: string, perPage: string): Observable<Beer[]> {
    param = param.trim();
    term = term.trim();
    perPage = perPage.trim();

    let options = new HttpParams();
    options = options.append(param, term);
    options = options.append('per_page', perPage);

    return this.http.get<Beer[]>(this.beersUrl,
      {
        params: options,
        responseType: 'json'
      })
      .pipe(
        map(beers => {
          return beers ? Object.assign([], beers) : null;
        }),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} beers by ${param}=${term}`);
        }),
        catchError(this.handleError<Beer[]>(`searchBeers ${param}=${term}`))
      );
  }

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param operation - name of the operation that failed
   */
  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      // Simulation: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      throw new Error(`${operation} failed: ${message}`);
    };

  }

  private log(message: string) {
    console.log('BeersService: ' + message);
  }
}
