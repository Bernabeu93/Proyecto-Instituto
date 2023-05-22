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

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => this.listaAlumnos = alumnos);
    // Llama al método getAlumnos() en el servicio y asigna la lista de alumnos al componente
  }
  
  ngOnInit(): void {
    this.getAlumnos();
    // En ngOnInit(), llama al método getAlumnos() para obtener la lista de alumnos al inicializar el componente
  }

  mostrarDetalles(alumno: AlumnoCrear): void {
    console.log('Detalles del alumno:', alumno);
    // Realiza otras acciones relacionadas con el alumno seleccionado
  }

}


