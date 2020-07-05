import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallcommandeComponent } from './showallcommande.component';

describe('ShowallcommandeComponent', () => {
  let component: ShowallcommandeComponent;
  let fixture: ComponentFixture<ShowallcommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallcommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
