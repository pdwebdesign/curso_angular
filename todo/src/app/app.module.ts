import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms' // É necessario importar para utilizar dentro do imports

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // importar o modulo de formularios do Angular, nâo vem como padrão
  ],
  providers: [],
  bootstrap: [AppComponent] // chama o app component
})
export class AppModule { }
