import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContenedorFormularioComponent } from './componentes/contenedor-formulario/contenedor-formulario.component';
import { InputStringComponent } from './componentes/input-string/input-string.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorFormularioComponent,
    InputStringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
