import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

import {ButtonModule} from 'primeng/button';
import { FormInputComponent } from './components/form-input/form-input.component'
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { LoaderComponent } from './components/loader/loader.component';
let components=[
  ButtonComponent,
  FormInputComponent,
  LoaderComponent,
]

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule
  ],
  exports: [
    ...components
  ]
})
export class SharedComponentsModule { }
