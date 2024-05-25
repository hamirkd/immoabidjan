import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTerrainComponent } from './show-terrain.component';

describe('ShowTerrainComponent', () => {
  let component: ShowTerrainComponent;
  let fixture: ComponentFixture<ShowTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTerrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
