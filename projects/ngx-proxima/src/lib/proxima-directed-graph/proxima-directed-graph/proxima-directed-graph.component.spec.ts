import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximaDirectedGraphComponent } from './proxima-directed-graph.component';

describe('ProximaDirectedGraphComponent', () => {
  let component: ProximaDirectedGraphComponent;
  let fixture: ComponentFixture<ProximaDirectedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximaDirectedGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximaDirectedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
