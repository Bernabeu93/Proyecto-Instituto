import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
//imports: [ BrowserModule, FormsModule],


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InicioAlumnoComponent } from './inicio-alumno/inicio-alumno.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { AppRoutingModule } from './app-routing.module';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MensajeComponent } from './alumnos/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InicioAlumnoComponent,
    NotificacionesComponent,
    BackNotasComponent,
    AlumnosComponent,
    AppComponent,
    MensajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
