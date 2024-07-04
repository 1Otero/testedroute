import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeProducerComponent } from './home-producer/home-producer.component';
import { HomeStoreComponent } from './home-store/home-store.component';

const routes: Routes = [{
  path: 'homeproducer',
  component: HomeProducerComponent
},{
  //path: 'homestore/:id',
  path: 'homestore',
  component: HomeStoreComponent
},{
  path: 'homestore/:id/refff',
  component: HomeStoreComponent,
  resolve: {
    id: (ActivatedRouteSnapshot: any) => {
      // Implement logic to retrieve the 'id' parameter value
      // This could involve fetching data from an API, a database, etc.
      // Return the resolved value as a Promise
      return Promise.resolve(12345); // Replace with actual logic
    }
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
