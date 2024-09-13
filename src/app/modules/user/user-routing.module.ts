import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { ProducerToUserDashboardComponent } from './producer-to-user-dashboard/producer-to-user-dashboard.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'alluser',
  pathMatch: 'full'
},{
  path: 'alluser',
  component: AllUserComponent
},{
  path: 'producertouserdashboard',
  component: ProducerToUserDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
