import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaParallelCoordinatePlotComponent } from './proxima-parallel-coordinate-plot.component';

describe('ProximaParallelCoordinatePlotComponent', () => {
  let component: ProximaParallelCoordinatePlotComponent;
  let fixture: ComponentFixture<ProximaParallelCoordinatePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaParallelCoordinatePlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaParallelCoordinatePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
