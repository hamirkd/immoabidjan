import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAcquereurComponent } from './show-acquereur.component';

describe('ShowAcquereurComponent', () => {
  let component: ShowAcquereurComponent;
  let fixture: ComponentFixture<ShowAcquereurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAcquereurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAcquereurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
