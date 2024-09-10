import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { PresentationInfoEventJobComponent } from './presentation-info-event-job/presentation-info-event-job.component';
import { EventModule } from '../event/event.module';
import { CreateSimpleEventComponent } from '../event/page/create-simple-event/create-simple-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PresentationInfoEventJobComponent,
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PresentationModule { }
