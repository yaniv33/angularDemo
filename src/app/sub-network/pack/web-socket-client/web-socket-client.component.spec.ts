import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketClientComponent } from './web-socket-client.component';

describe('WebSocketClientComponent', () => {
  let component: WebSocketClientComponent;
  let fixture: ComponentFixture<WebSocketClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
