import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillaProyectosComponent } from './platilla-proyectos.component';

describe('PlatillaProyectosComponent', () => {
  let component: PlatillaProyectosComponent;
  let fixture: ComponentFixture<PlatillaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillaProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
