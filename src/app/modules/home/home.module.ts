import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeProducerComponent } from './home-producer/home-producer.component';
//import { CardStoreComponent } from '../store/page/card-store/card-store.component';
import { StoreModule } from '../store/store.module';
import { HomeStoreComponent } from './home-store/home-store.component';
import { EventsProducerComponent } from './page/presents/events/events-producer/events-producer.component';
import { EventProducerComponent } from './page/presents/events/card/event-producer/event-producer.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { EventsStoreComponent } from './page/presents/events/events-store/events-store.component';
import { EventStoreComponent } from './page/presents/events/card/event-store/event-store.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeProducerComponent,
    HomeStoreComponent,
    EventsProducerComponent,
    EventProducerComponent,
    EventsStoreComponent,
    EventStoreComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
