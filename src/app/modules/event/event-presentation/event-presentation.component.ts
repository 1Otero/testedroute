import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-event-presentation',
  templateUrl: './event-presentation.component.html',
  styleUrl: './event-presentation.component.css'
})
export class EventPresentationComponent {
  private eventId:String="";
  constructor(private router:Router, private userService:UserService){
   let navigate= router.getCurrentNavigation()
   this.eventId= navigate?.extras?.state?.["eventId"]==undefined?0:navigate?.extras?.state?.["eventId"]
   console.log("this.eventId: ")
   console.log(this.eventId)
  }
  backView(){
    window.history.back()
    console.log("view back")
  }
  viewToUser(){
    this.router.navigate(["/user/producertouserdashboard"], {state: {eventId: this.eventId}})
  }
}
