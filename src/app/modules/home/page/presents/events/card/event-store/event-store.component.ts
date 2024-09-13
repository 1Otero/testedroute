import { Component, Input } from '@angular/core';
import { Event } from '../../../../../../../model/event/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-store',
  templateUrl: './event-store.component.html',
  styleUrl: './event-store.component.css'
})
export class EventStoreComponent {
 @Input() event?:Event
 constructor(private router:Router){}
 viewEvent(){
  let eventId= this.event?._eventId
  this.router.navigate(["/event/eventpresentation"], {state: {eventId}})
 }
}
