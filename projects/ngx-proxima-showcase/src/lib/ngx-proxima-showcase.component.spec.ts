import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxProximaShowcaseComponent } from './ngx-proxima-showcase.component';

describe('NgxProximaShowcaseComponent', () => {
  let component: NgxProximaShowcaseComponent;
  let fixture: ComponentFixture<NgxProximaShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxProximaShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxProximaShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
