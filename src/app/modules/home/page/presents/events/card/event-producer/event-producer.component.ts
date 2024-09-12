import { Component, Input } from '@angular/core';
import { Event } from '../../../../../../../model/event/event';

@Component({
  selector: 'app-event-producer',
  templateUrl: './event-producer.component.html',
  styleUrl: './event-producer.component.css'
})
export class EventProducerComponent {
 @Input("meEvent") event!:Event;
 constructor(){}
}
