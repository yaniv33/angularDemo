import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRouteComponent } from './sub-route.component';

describe('SubRouteComponent', () => {
  let component: SubRouteComponent;
  let fixture: ComponentFixture<SubRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
