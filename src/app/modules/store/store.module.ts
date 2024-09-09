import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CardStoreComponent } from './page/card-store/card-store.component';
import { AllStoreComponent } from './all-store/all-store.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { CreateStoreByProducerComponent } from './create-store-by-producer/create-store-by-producer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CardStoreComponent,
    AllStoreComponent,
    CreateStoreComponent,
    CreateStoreByProducerComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CardStoreComponent,
  ]
})
export class StoreModule { }
