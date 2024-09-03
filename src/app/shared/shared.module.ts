import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

import {ButtonModule} from 'primeng/button'
let components=[
  ButtonComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedComponentsModule { }
