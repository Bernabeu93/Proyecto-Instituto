import { MensajeComponent } from './alumnos/mensaje.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InicioAlumnoComponent } from './inicio-alumno/inicio-alumno.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { AlumnosComponent } from './alumnos/alumnos.component';


const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'alumno', component: InicioAlumnoComponent},
  {path:'notificaciones', component: NotificacionesComponent},
  {path:'backNotas', component: BackNotasComponent},
  {path:'alumnos', component: AlumnosComponent}


]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
