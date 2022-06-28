import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardManualFillingViewComponent } from './credit-card-manual-filling-view.component';

describe('CreditCardManualFillingViewComponent', () => {
  let component: CreditCardManualFillingViewComponent;
  let fixture: ComponentFixture<CreditCardManualFillingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardManualFillingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardManualFillingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
