import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosService } from './../alumnos/alumnos.service';
import { DetallesAlumnoComponent } from './detalles-alumno.component';

describe('DetallesAlumnoComponent', () => {
  let component: DetallesAlumnoComponent;
  let fixture: ComponentFixture<DetallesAlumnoComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  
});
