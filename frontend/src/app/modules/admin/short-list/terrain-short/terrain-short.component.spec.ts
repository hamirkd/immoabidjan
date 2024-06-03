import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainShortComponent } from './terrain-short.component';

describe('TerrainShortComponent', () => {
  let component: TerrainShortComponent;
  let fixture: ComponentFixture<TerrainShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
