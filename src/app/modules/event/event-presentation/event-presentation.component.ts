import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-presentation',
  templateUrl: './event-presentation.component.html',
  styleUrl: './event-presentation.component.css'
})
export class EventPresentationComponent {
  private eventId:number=0;
  constructor(private router:Router){
   let navigate= router.getCurrentNavigation()
   this.eventId= navigate?.extras?.state?.["eventId"]==undefined?0:navigate?.extras?.state?.["eventId"]
  }
  backView(){
    window.history.back()
    console.log("view back")
  }
  viewToUser(){
    this.router.navigate(["/user/producertouserdashboard"], {state: {eventId: this.eventId}})
  }
}
