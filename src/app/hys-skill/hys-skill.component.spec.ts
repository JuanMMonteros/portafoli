import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HysSkillComponent } from './hys-skill.component';

describe('HysSkillComponent', () => {
  let component: HysSkillComponent;
  let fixture: ComponentFixture<HysSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HysSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HysSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
