import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Keeb } from './keeb';
import { KEEBS } from './group-buys';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class KeebService {

  constructor(
    private http: HttpClient,) { }
getKeebs(): Observable<Keeb[]> {
  return this.http.get<Keeb[]>(this.keebsUrl)
    .pipe(
      tap(_ => this.log('fetched keebs')),
      catchError(this.handleError<Keeb[]>('getKeeb', []))
    );
}

getKeeb(id: number): Observable<Keeb> {
  const url = `${this.keebsUrl}/${id}`;
  return this.http.get<Keeb>(url).pipe(
    tap(_ => this.log(`fetched keeb id=${id}`)),
    catchError(this.handleError<Keeb>(`getKeeb id=${id}`))
  );
}
private log(message: string) {}

private keebsUrl = 'api/keebs';  // URL to web api

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation 
 * @param result 
 */

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



searchKeebs(term: string): Observable<Keeb[]> {
  if (!term.trim()) {
    return of([]);
  }
  return this.http.get<Keeb[]>(`${this.keebsUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found keebs matching "${term}"`) :
       this.log(`no keebs matching "${term}"`)),
    catchError(this.handleError<Keeb[]>('searchKeebs', []))
  );
}

}