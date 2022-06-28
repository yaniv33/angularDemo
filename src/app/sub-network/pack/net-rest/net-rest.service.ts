
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './interface';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {MessageService} from '../heroes/services/message.service';
import {Eventy, Hero, System} from '../../../export-class/hero';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetRestService {

  private heroesUrl = '/springDemo/rest/userManagement/getHeros';  // URL to web pack

  dataBehavior$  = new Subject();

  constructor(public http: HttpClient,
              private messageService: MessageService) {
    console.log('Hello');
  }

  getHello() {

    const parameter = {
      systemID: 0,
      name: 'Black'
    };

    return this.http.get(`/springDemo/rest/userManagement/hello`, {});
  }

  sendAndReceiveObject( person: Person): Observable<Person> {
    return this.http.post<Person>(`/springDemo/rest/userManagement/getVenueInfoTest`, person, {});
  }


  getHerosbyid(hero: Hero): Observable<Hero> {

    const url = `/springDemo/rest/userManagement/getHeros1/${hero.id}`;

    this.dataBehavior$.next('Get: ' +  url);
    return this.http.get<Hero>(url,  {});

  }

getHerosAll(): Observable<Hero[]> {
  this.dataBehavior$.next('Get: ' +  `/springDemo/rest/userManagement/getHeros`);
  return this.http.get<Hero[]>(`/springDemo/rest/userManagement/getHeros`, {});
}

getHeroByID(id: number): Observable<Hero> {
  this.dataBehavior$.next('Post: ' +  `/springDemo/rest/userManagement/getHeros?id=${id}`);
  return this.http.post<Hero>(`/springDemo/rest/userManagement/getHeros?id=${id}`, {});
}

getHeroByName(name: string): Observable<Hero> {
  this.dataBehavior$.next('Get: ' +  `/springDemo/rest/userManagement/getHeros?name=${name}`);
  return this.http.get<Hero>(`/springDemo/rest/userManagement/getHeros?name=${name}`, {});
}


  getHeros(): Observable<Hero[]> {
    this.dataBehavior$.next('Get: ' +  `/springDemo/rest/userManagement/getHeros`);
    return this.http.get<Hero[]>(`/springDemo/rest/userManagement/getHeros`);

  }

  getAllHeros(): Observable<Hero[]> {
    this.dataBehavior$.next('Get: ' +  this.heroesUrl);
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
          // map(heroes => heroes[0]), // returns a {0|1} element array
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );

  }

  sendOtotMobi(): Observable<System> {

    const url = '/PlaykersServer/rest/Playkers/getLastConnected';
    const system = {
      system_ID: 1
    };

    this.dataBehavior$.next('Post: ' +  url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control' :  'no-cache'
      })};

    return this.http.post<System>(url , system , httpOptions);

  }

  sendOtotMobiGetSingleEvent(): Observable<Eventy> {
    const url = '/PlaykersServer/rest/Playkers/getSingleEvent';
    const event = {
      game_ID: 6921
    };

    this.dataBehavior$.next('Post: ' +  url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control' :  'no-cache'
      })};

    return this.http.post<Eventy>(url , event , httpOptions);

  }


  sendOtotMobiLocal() {
    const url = '/LocalServer/rest/Playkers/getLastConnected';
    const system = {
      system_ID: 1
    };

    this.dataBehavior$.next('Post: ' +  url);
    return this.http.post(url , system);

  }

  sendOtotMobiLocal2() {
    const url = '/LocalServer/rest/Playkers/getLastConnected';
    const system = {
      system_ID: 1
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
      })};

    this.dataBehavior$.next('Post with header: ' +  url);
    return this.http.post(url , system, httpOptions);

  }

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

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
