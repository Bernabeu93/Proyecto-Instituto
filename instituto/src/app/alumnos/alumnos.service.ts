import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AlumnoCrear } from './../alumnos';
import { alumnos } from './../mock-alumnos';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private log(mensaje: string) {
    this.mensajeService.agregarMensaje(`AlumnosService: ${mensaje}`);
  }

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService
  ) { }

  // Obtiene la lista de alumnos
  getAlumnos(): Observable<AlumnoCrear[]> {
    this.mensajeService.agregarMensaje('Servicio de Usuarios: Usuarios recuperados');
    return this.http.get<AlumnoCrear[]>(this.alumnosUrl);    
    // Devuelve la lista de alumnos desde el archivo mock-alumnos.ts
  }
}




