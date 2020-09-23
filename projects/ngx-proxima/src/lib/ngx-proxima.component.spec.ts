import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProximaComponent } from './ngx-proxima.component';

describe('NgxProximaComponent', () => {
  let component: NgxProximaComponent;
  let fixture: ComponentFixture<NgxProximaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxProximaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
