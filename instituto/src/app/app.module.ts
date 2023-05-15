import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { InicioAlumnoComponent } from './inicio-alumno/inicio-alumno.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { AppRoutingModule } from './app-routing.module';
import { BackNotasComponent } from './back-notas/back-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InicioAlumnoComponent,
    NotificacionesComponent,
    BackNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
