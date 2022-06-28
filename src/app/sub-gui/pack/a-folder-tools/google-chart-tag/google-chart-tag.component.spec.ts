import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartTagComponent } from './google-chart-tag.component';

describe('GoogleChartTagComponent', () => {
  let component: GoogleChartTagComponent;
  let fixture: ComponentFixture<GoogleChartTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleChartTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleChartTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
