import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCreditLayout2Component } from './test-credit-layout2.component';

describe('TestCreditLayout2Component', () => {
  let component: TestCreditLayout2Component;
  let fixture: ComponentFixture<TestCreditLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCreditLayout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCreditLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
