import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlumnoCrear } from './../alumnos';
import { alumnos } from './../mock-alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  // Este servicio proporciona la funcionalidad para obtener la lista de alumnos

  getAlumnos(): Observable<AlumnoCrear[]> {
    const listaAlumnos = of(alumnos);
    return listaAlumnos;
    // Devuelve un observable de la lista de alumnos desde el archivo mock-alumnos.ts
  }

  constructor() { }
  // Constructor del servicio, no realiza ninguna acción adicional
}

