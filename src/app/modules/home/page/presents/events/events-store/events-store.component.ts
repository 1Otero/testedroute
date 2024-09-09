import { Component, Input } from '@angular/core';
import { EventAndProducerInfo } from '../../../../../../model/event/more/event-and-producer-info';

@Component({
  selector: 'app-events-store',
  templateUrl: './events-store.component.html',
  styleUrl: './events-store.component.css'
})
export class EventsStoreComponent {
  @Input("listInfoByStore") listEventByStore?:EventAndProducerInfo[] 
}
