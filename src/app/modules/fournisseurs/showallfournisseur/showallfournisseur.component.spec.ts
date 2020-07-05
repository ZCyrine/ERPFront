import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallfournisseurComponent } from './showallfournisseur.component';

describe('ShowallfournisseurComponent', () => {
  let component: ShowallfournisseurComponent;
  let fixture: ComponentFixture<ShowallfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
