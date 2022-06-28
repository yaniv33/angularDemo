import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {GraphData, GraphStract} from './graph-data';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  private graphDataUrl = '/springDemo/rest/userManagement/getGraph';
  msgObj = new Subject();

  constructor( private http: HttpClient) { }

  getGraphData(): Observable<GraphStract> {
      this.msgObj.next('GET : /springDemo/rest/userManagement/getGraph');
      return this.http.get<GraphStract>(this.graphDataUrl)
        .pipe(
          tap(_ => console.log('fetched graph'))
          // catchError( this.handleError<any>('updateGraph'))
        );
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     console.log(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
