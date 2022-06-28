import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePosComponent } from './route-pos.component';

describe('RoutePosComponent', () => {
  let component: RoutePosComponent;
  let fixture: ComponentFixture<RoutePosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
