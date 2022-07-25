import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillaEduComponent } from './platilla-edu.component';

describe('PlatillaEduComponent', () => {
  let component: PlatillaEduComponent;
  let fixture: ComponentFixture<PlatillaEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillaEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillaEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
