import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common';

import { ProducerSignupRoutingModule } from './producer-signup-routing.module';
import { ProducerSignupComponent } from './producer-signup/producer-signup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { AlertModule } from '../alert/alert.module';

@NgModule({
  declarations: [
    ProducerSignupComponent
  ],
  imports: [
    CommonModule,
    ProducerSignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    AlertModule
  ],
})
export class ProducerSignupModule { }
