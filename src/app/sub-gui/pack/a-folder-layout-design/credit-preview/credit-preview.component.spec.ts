import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPreviewComponent } from './credit-preview.component';

describe('CreditPreviewComponent', () => {
  let component: CreditPreviewComponent;
  let fixture: ComponentFixture<CreditPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
