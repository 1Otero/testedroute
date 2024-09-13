import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AllUserComponent } from './all-user/all-user.component';
import { ProducerToUserDashboardComponent } from './producer-to-user-dashboard/producer-to-user-dashboard.component';


@NgModule({
  declarations: [
    AllUserComponent,
    ProducerToUserDashboardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
