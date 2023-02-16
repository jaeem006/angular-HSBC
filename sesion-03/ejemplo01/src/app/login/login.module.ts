import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaComponent } from './../home/bienvenida/bienvenida.component'

import { FormModule } from './form/form.module'



@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ]
})
export class LoginModule { }
