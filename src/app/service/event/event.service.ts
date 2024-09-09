import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../model/event/event';
import { environment } from '../../../environments/environment.dev';
import { tap, Observable } from 'rxjs'
import { Entity } from '../../model/utils/response/entity';
import { EventAndProducerInfo } from '../../model/event/more/event-and-producer-info';
import { ListEntity } from '../../model/utils/response/list-entity';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getAllEvent(){
    
  }
  createEvent(infoEventCreate:any):Observable<Entity<Event>>{
    return this.http.post<Entity<Event>>(`${environment.urllocal}/event/createevent`, infoEventCreate)
    .pipe(
      tap((e) => {
          console.log(e)
          return e
      })
    )
  }
  getAllEventsByProducer(producerId:String):Observable<ListEntity<EventAndProducerInfo>>{
   return this.http.post<ListEntity<EventAndProducerInfo>>(`${environment.urllocal}/event/getalleventbyproducer`, {producerId})
   .pipe(
    tap((e) => {
      return e
    })
   )
  }
  getAllEventsByStoreId(storeId:String):Observable<ListEntity<EventAndProducerInfo>>{
    return this.http.post<ListEntity<EventAndProducerInfo>>(`${environment.urllocal}/event/getalleventbystoreid`, {storeId})
    .pipe(
      tap(e => {
        return e
      })
    )
  }
}
