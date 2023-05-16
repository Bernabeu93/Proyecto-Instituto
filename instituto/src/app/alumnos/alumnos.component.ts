import { alumnos } from './../mock-alumnos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit {

  alumno: alumnos ;

  constructor() { }

  ngOnInit() {
  }

}
