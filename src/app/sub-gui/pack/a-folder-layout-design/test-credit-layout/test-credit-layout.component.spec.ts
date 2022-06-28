import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCreditLayoutComponent } from './test-credit-layout.component';

describe('TestCreditLayoutComponent', () => {
  let component: TestCreditLayoutComponent;
  let fixture: ComponentFixture<TestCreditLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCreditLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCreditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
