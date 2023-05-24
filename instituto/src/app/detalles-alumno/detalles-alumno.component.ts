import { Component } from '@angular/core';
import { AlumnosService } from './../alumnos/alumnos.service';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css']
})
export class DetallesAlumnoComponent {
  alumnos: any; // Asegúrate de definir alumnos o importarlo correctamente

  constructor(private AlumnosService: AlumnosService) { }

  save(): void {
    if (this.alumnos) {
      this.AlumnosService.updateAlumno(this.alumnos)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    // Implementa la lógica para volver a la página anterior
  }
}
 