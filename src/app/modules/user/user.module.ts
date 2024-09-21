import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AllUserComponent } from './all-user/all-user.component';
import { ProducerToUserDashboardComponent } from './producer-to-user-dashboard/producer-to-user-dashboard.component';
import { AllUsersByEventComponent } from './page/all-users-by-event/all-users-by-event.component';
import { CardUserInfoComponent } from './page/card/card-user-info/card-user-info.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AllUserComponent,
    ProducerToUserDashboardComponent,
    AllUsersByEventComponent,
    CardUserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class UserModule { }
