import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallproduitComponent } from './showallproduit.component';

describe('ShowallproduitComponent', () => {
  let component: ShowallproduitComponent;
  let fixture: ComponentFixture<ShowallproduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallproduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
