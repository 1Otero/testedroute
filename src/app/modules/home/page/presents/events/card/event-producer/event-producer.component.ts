import { Component, Input } from '@angular/core';
import { Event } from '../../../../../../../model/event/event';
import { EventPresentationComponent } from '../../../../../../event/event-presentation/event-presentation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-producer',
  templateUrl: './event-producer.component.html',
  styleUrl: './event-producer.component.css'
})
export class EventProducerComponent {
 @Input("meEvent") event!:Event;
 constructor(private router:Router){}
 openDialog(){
  let eventId= this.event?._eventId
  this.router.navigate(['/event/eventpresentation'], {state: {eventId}})
 }
}
