import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlumnoCrear } from './../alumnos';
import { alumnos } from './../mock-alumnos';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  // Esta linea obtiene la lista de alumnos

  constructor(private mensajeService: MensajeService) { }

  // Obtiene la lista de alumnos
  getAlumnos(): Observable<AlumnoCrear[]> {
    this.mensajeService.agregarMensaje('Servicio de Usuarios: Usuarios recuperados');
    return of(alumnos);
    // Devuelve la lista de alumnos desde el archivo mock-alumnos.ts
  }
}



