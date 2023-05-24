import { Component, OnInit } from '@angular/core';
import { AlumnoCrear } from './../alumnos';
import { AlumnosService } from './alumnos.service';
import { MensajeService } from './mensaje.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: AlumnoCrear[] = [];

  constructor(private alumnosService: AlumnosService, private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => this.listaAlumnos = alumnos);
  }

  mostrarDetalles(alumno: AlumnoCrear): void {
    console.log('Detalles del alumno:', alumno);
    // Realiza otras acciones relacionadas con el alumno seleccionado
  }

  addAlumno(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.alumnosService.addAlumno({ nombre: name } as AlumnoCrear)
      .subscribe(alumno => {
        this.listaAlumnos.push(alumno);
      });
  }
}



