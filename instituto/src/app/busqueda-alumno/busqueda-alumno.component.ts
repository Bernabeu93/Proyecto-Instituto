import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { AlumnoCrear } from '../alumnos';
import { AlumnosService } from './../alumnos/alumnos.service';

@Component({
  selector: 'app-busqueda-alumno',
  templateUrl: './busqueda-alumno.component.html',
  styleUrls: ['./busqueda-alumno.component.css']
})
export class BusquedaAlumnoComponent implements OnInit {
  alumnos$!: Observable<AlumnoCrear[]>;
  private searchTerms = new Subject<string>();

  constructor(private alumnosService: AlumnosService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.alumnos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.alumnosService.searchAlumno(term)),
    );
  }
  
}

