import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';
import { tap } from 'rxjs';
import { Entity } from '../../model/utils/response/entity';
import { InfoUserByEvent } from '../../model/user/info-user-by-event';
import { ListEntity } from '../../model/utils/response/list-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) {}
  getAllUserByEventId(eventId:String){
   return this.http.get<ListEntity<InfoUserByEvent>>(`${environment.urllocal}/user/getallusersbyevent/${eventId}`)
   .pipe(
    tap((e) => {
     return e;
    })
   )
  }
  getAllUsersByEventCode(codEvent:String){

  }
}
