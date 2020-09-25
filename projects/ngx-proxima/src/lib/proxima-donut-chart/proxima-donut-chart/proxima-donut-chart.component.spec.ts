import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaDonutChartComponent } from './proxima-donut-chart.component';

describe('ProximaDonutChartComponent', () => {
  let component: ProximaDonutChartComponent;
  let fixture: ComponentFixture<ProximaDonutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaDonutChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
