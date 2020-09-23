import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaPieChartComponent } from './proxima-pie-chart.component';

describe('ProximaPieChartComponent', () => {
  let component: ProximaPieChartComponent;
  let fixture: ComponentFixture<ProximaPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
