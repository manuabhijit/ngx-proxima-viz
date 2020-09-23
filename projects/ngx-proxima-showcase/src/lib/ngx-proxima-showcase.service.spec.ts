import { TestBed } from '@angular/core/testing';

import { NgxProximaShowcaseService } from './ngx-proxima-showcase.service';

describe('NgxProximaShowcaseService', () => {
  let service: NgxProximaShowcaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxProximaShowcaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
