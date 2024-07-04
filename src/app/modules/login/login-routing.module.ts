import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducerLoginComponent } from './page/producer-login/producer-login.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'producerlogin',
  pathMatch: 'full'
},{
  path: 'producerlogin',
  component: ProducerLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
