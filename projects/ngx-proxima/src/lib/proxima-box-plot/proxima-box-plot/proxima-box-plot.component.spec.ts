import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaBoxPlotComponent } from './proxima-box-plot.component';

describe('ProximaBoxPlotComponent', () => {
  let component: ProximaBoxPlotComponent;
  let fixture: ComponentFixture<ProximaBoxPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaBoxPlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaBoxPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
