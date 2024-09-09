import { Component, Input } from '@angular/core';
import { Event } from '../../../../../../../model/event/event';

@Component({
  selector: 'app-event-store',
  templateUrl: './event-store.component.html',
  styleUrl: './event-store.component.css'
})
export class EventStoreComponent {
 @Input() event?:Event
}
