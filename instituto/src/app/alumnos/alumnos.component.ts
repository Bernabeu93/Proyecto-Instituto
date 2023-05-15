import { AlumnoCrear } from './../alumnos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

alumno: AlumnoCrear = {

  id: 1, dni:'12345678T', nombre: 'Jorge' ,apellidos: 'García González', usuario:'frodo_bolsón', password:'12345'

};

constructor() { }

  ngOnInit() {
  }

}