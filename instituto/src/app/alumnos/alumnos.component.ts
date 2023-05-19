import { Component, OnInit } from '@angular/core';
import { AlumnoCrear } from './../alumnos';
import { AlumnosService } from './alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: AlumnoCrear[] = [];

  constructor(private alumnosService: AlumnosService) { }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe(alumnos => this.listaAlumnos = alumnos);
    // Llama al método getAlumnos() en el servicio AlumnosService y asigna la lista de alumnos al componente
  }
  
  ngOnInit(): void {
    this.getAlumnos();
    // En el ciclo de vida ngOnInit(), llama al método getAlumnos() para obtener la lista de alumnos al inicializar el componente
  }
}
