import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventPresentationComponent } from './event-presentation/event-presentation.component';
import { CreateSimpleEventComponent } from './page/create-simple-event/create-simple-event.component';
import { CreateManagedEventComponent } from './page/create-managed-event/create-managed-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PresentationWebEventJobComponent } from './page/presentation-web-event-job/presentation-web-event-job.component';


@NgModule({
  declarations: [
    EventPresentationComponent,
    CreateSimpleEventComponent,
    CreateManagedEventComponent,
    PresentationWebEventJobComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class EventModule { }
