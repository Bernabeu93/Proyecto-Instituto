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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
    
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
