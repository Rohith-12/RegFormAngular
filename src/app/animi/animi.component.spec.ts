import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimiComponent } from './animi.component';

describe('AnimiComponent', () => {
  let component: AnimiComponent;
  let fixture: ComponentFixture<AnimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
