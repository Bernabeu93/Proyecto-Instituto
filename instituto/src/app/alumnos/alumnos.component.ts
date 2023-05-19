import { Component, OnInit } from '@angular/core';
import { AlumnoCrear } from './../alumnos';
import { alumnos } from './../mock-alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: AlumnoCrear[] = [];

  constructor() { }

  ngOnInit() {
    this.listaAlumnos = alumnos;
  }

  alumnoClick(alumno: AlumnoCrear) {
    console.log('Alumno clickeado:', alumno);
    // Aquí puedes realizar la lógica adicional que desees
  }
}
