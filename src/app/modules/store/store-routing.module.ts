import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStoreByProducerComponent } from './create-store-by-producer/create-store-by-producer.component';

const routes: Routes = [{
  path: 'createstorebyproducer',
  component: CreateStoreByProducerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
