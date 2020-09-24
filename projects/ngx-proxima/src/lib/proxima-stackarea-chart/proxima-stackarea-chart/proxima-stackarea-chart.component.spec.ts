import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaStackareaChartComponent } from './proxima-stackarea-chart.component';

describe('ProximaStackareaChartComponent', () => {
  let component: ProximaStackareaChartComponent;
  let fixture: ComponentFixture<ProximaStackareaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaStackareaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaStackareaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
