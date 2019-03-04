import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
// import { MedicosService } from './intermedio/espias/medicos.service';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent
  ],
  imports: [
    BrowserModule
    // MedicosService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
