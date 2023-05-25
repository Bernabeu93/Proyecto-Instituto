import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlumnoCrear } from '../alumnos';
import { AlumnosService } from './../alumnos/alumnos.service';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css']
})
export class DetallesAlumnoComponent implements OnInit {
  alumno! : AlumnoCrear;

  constructor(
    private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.alumnosService.getAlumno(id)
      .subscribe(alumno => this.alumno = alumno);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.alumno) {
      this.alumnosService.updateAlumno(this.alumno)
        .subscribe(() => this.goBack());
    }
  }
}


 