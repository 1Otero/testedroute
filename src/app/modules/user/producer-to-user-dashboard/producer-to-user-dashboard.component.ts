import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { InfoUserByEvent } from '../../../model/user/info-user-by-event';
import { UpfileService } from '../../../service/upfile/upfile.service';
// import * as FileServer from 'file-saver'
import { environment } from '../../../../environments/environment.dev';

@Component({
  selector: 'app-producer-to-user-dashboard',
  templateUrl: './producer-to-user-dashboard.component.html',
  styleUrl: './producer-to-user-dashboard.component.css'
})
export class ProducerToUserDashboardComponent implements OnInit{
 @Input() meListUsersByEvent!:InfoUserByEvent[];
 @Input() eventId:String="";
 @Input() hrefDownload:String= `${environment.urllocal}/upfile/crearplantillabaseproductsbyevent/`
 constructor(private router:Router, private userService:UserService, private upfileService:UpfileService){
  // let navigation= router.getCurrentNavigation()
  // let eventId:String= navigation?.extras?.state?.["eventId"]
  //Recordarme traer todos los usuarios al eventos, relacionados con este eventId 
  //crear la relacion con la tabla de evento y usuario que va asistir al evento. que tambien tiene asistencia, y estado de pago
  // this.allUserByEvent(eventId)
  let navigation= this.router.getCurrentNavigation()
  //let eventId:String= navigation?.extras?.state?.["eventId"]
  this.eventId= navigation?.extras?.state?.["eventId"]
  console.log("eventId: ")
  console.log(this.eventId)
  this.hrefDownload= this.hrefDownload.concat(this.eventId.toString())
 }
 ngOnInit():void{
  console.log("eventId: ")
  console.log(this.eventId)
  this.allUserByEvent(this.eventId)
 }
 allUserByEvent(eventId:String){
  console.log(eventId)
  this.userService.getAllUserByEventId(eventId)
  .subscribe(e => {
    console.log("e: ")
    console.log(e)
    this.meListUsersByEvent= e.success
    console.log(this.meListUsersByEvent)
  })
}
getPlantillaUsersByEvent(){
  this.upfileService.getPlantillaUserByEvent(this.eventId)
  .subscribe(e => {
    this.hrefDownload = this.hrefDownload.concat(this.eventId.toString())
    console.log(e)
    console.log(this.hrefDownload)
    let meBlob= new Blob([e], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
    console.log(meBlob)
    let meUrl= window.URL.createObjectURL(meBlob)
    console.log("window.screenX: ")
    console.log(window.screenX)
    let meA= document.createElement("a")
    meA.href= this.hrefDownload as string
    meA.download= this.hrefDownload as string
    meA.click()
    meA.remove()
    window.URL.revokeObjectURL(meUrl)
  })  
  // .subscribe(e => {
  //   console.log(e)

  // })
}
}
