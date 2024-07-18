import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../model/event/event';
import { environment } from '../../../environments/environment.dev';
import { tap, Observable } from 'rxjs'
import { Entity } from '../../model/utils/response/entity';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getAllEvent(){
    
  }
  createEvent(eventCreate:Event):Observable<Entity<Event>>{
    console.log(eventCreate)
    return this.http.post<Entity<Event>>(`${environment.urllocal}/event/createevent`, eventCreate)
    .pipe(
      tap((e) => {
          console.log(e)
          return e
      })
    )
  }
}
