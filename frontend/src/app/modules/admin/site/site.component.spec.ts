import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteComponent } from './indicateur.component';

describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
