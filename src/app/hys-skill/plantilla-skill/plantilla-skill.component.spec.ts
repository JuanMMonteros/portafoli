import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaSkillComponent } from './plantilla-skill.component';

describe('PlantillaSkillComponent', () => {
  let component: PlantillaSkillComponent;
  let fixture: ComponentFixture<PlantillaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
