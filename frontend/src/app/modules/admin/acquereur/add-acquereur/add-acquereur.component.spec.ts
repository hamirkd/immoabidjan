import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcquereurComponent } from './add-acquereur.component';

describe('AddAcquereurComponent', () => {
  let component: AddAcquereurComponent;
  let fixture: ComponentFixture<AddAcquereurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcquereurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcquereurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
