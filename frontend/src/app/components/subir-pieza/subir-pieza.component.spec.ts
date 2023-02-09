import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirPiezaComponent } from './subir-pieza.component';

describe('SubirPiezaComponent', () => {
  let component: SubirPiezaComponent;
  let fixture: ComponentFixture<SubirPiezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirPiezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirPiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
