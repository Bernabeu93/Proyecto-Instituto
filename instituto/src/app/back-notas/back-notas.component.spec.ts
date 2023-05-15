import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNotasComponent } from './back-notas.component';

describe('BackNotasComponent', () => {
  let component: BackNotasComponent;
  let fixture: ComponentFixture<BackNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
