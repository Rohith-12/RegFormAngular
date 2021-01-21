import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalformComponent } from './professionalform.component';

describe('ProfessionalformComponent', () => {
  let component: ProfessionalformComponent;
  let fixture: ComponentFixture<ProfessionalformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
