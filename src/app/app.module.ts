import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
// import { MedicosService } from './intermedio/espias/medicos.service';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router/src/router_module';
import { RUTAS } from './avanzado/rutas/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
