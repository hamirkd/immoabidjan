import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteSiteComponent } from './carte-site.component';

describe('CarteSiteComponent', () => {
  let component: CarteSiteComponent;
  let fixture: ComponentFixture<CarteSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
