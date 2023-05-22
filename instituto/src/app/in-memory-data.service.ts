import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AlumnoCrear } from './alumnos';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuariosDB: AlumnoCrear[] = [
      { id: 1, dni: '12345678T', nombre: 'Jorge', apellidos: 'García González', usuario: 'frodo_bolsón', password: '12345' },
      { id: 2, dni: '98765432A', nombre: 'Marcos', apellidos: 'Rodríguez López', usuario: 'arwen_undómiel', password: 'abcde' },
      { id: 3, dni: '54321098H', nombre: 'Ana', apellidos: 'Pérez Sánchez', usuario: 'samwise_gamgee', password: 'qwerty' },
      { id: 4, dni: '24681012D', nombre: 'Ruben', apellidos: 'Martínez Gómez', usuario: 'legolas_verdehoja', password: '11111' },
      { id: 5, dni: '13579024E', nombre: 'Carla', apellidos: 'Fernández Ruiz', usuario: 'gandalf_el_gris', password: '00000' },
      { id: 6, dni: '87654321Z', nombre: 'Lorena', apellidos: 'Romero Álvarez', usuario: 'aragorn_ii', password: 'password' },
      { id: 7, dni: '36925814X', nombre: 'Jesus', apellidos: 'Jiménez Moreno', usuario: 'bilbo_bolsón', password: '123456' },
      { id: 8, dni: '48260193P', nombre: 'Cristian', apellidos: 'Navarro Ortiz', usuario: 'galadriel_lórien', password: 'iloveyou' },
      { id: 9, dni: '97531068J', nombre: 'Isabel', apellidos: 'Torres Ramírez', usuario: 'eowyn_escudo_de_roble', password: 'letmein' },
      { id: 10, dni: '71450682S', nombre: 'Ramiro', apellidos: 'Castro Medina', usuario: 'gimli_hijo_de_glóin', password: 'monkey' }
    ];
    return { usuariosDB };
  }

  // Overrides the genId method to ensure that an alumno always has an id.
  // If the usuariosDB array is empty,
  // the method below returns the initial number (1).
  // If the usuariosDB array is not empty, the method below returns the highest
  // alumno id + 1.
  genId(usuariosDB: AlumnoCrear[]): number {
    return usuariosDB.length > 0 ? Math.max(...usuariosDB.map(alumno => alumno.id)) + 1 : 1;
  }
}
