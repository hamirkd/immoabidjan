import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquereurShortComponent } from './acquereur-short.component';

describe('AcquereurShortComponent', () => {
  let component: AcquereurShortComponent;
  let fixture: ComponentFixture<AcquereurShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquereurShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquereurShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
