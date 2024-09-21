import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.dev';
import { Observable, tap } from 'rxjs';
import { Entity } from '../../model/utils/response/entity';

@Injectable({
  providedIn: 'root'
})
export class UpfileService {

  constructor(private http:HttpClient) { }
  getPlantillaUserByEvent(eventId:String){
    return this.http.post(`${environment.urllocal}/upfile/crearplantillabaseproductsbyevent`, {nameEvent: eventId}, {responseType: 'blob'})
    .pipe(
     tap((e) => {
      return e
     })
    )
   }
}
