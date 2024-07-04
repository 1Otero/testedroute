import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerSignupComponent } from './producer-signup/producer-signup.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'producersignup',
  pathMatch: 'full'
},{
  path: 'producersignup',
  component: ProducerSignupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerSignupRoutingModule { }
