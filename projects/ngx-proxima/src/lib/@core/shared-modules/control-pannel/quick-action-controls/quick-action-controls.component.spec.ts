import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActionControlsComponent } from './quick-action-controls.component';

describe('QuickActionControlsComponent', () => {
  let component: QuickActionControlsComponent;
  let fixture: ComponentFixture<QuickActionControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickActionControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickActionControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
