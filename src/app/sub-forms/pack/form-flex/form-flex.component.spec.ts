import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFlexComponent } from './form-flex.component';

describe('FormFlexComponent', () => {
  let component: FormFlexComponent;
  let fixture: ComponentFixture<FormFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
