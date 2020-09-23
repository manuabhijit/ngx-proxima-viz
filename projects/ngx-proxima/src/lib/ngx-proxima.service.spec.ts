import { TestBed } from '@angular/core/testing';

import { NgxProximaService } from './ngx-proxima.service';

describe('NgxProximaService', () => {
  let service: NgxProximaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProximaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
