import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallcategorieComponent } from './showallcategorie.component';

describe('ShowallcategorieComponent', () => {
  let component: ShowallcategorieComponent;
  let fixture: ComponentFixture<ShowallcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowallcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowallcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
