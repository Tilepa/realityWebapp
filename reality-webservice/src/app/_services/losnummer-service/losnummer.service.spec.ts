import { TestBed, inject } from '@angular/core/testing';

import { LosnummerService } from './losnummer.service';

describe('LosnummerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LosnummerService]
    });
  });

  it('should be created', inject([LosnummerService], (service: LosnummerService) => {
    expect(service).toBeTruthy();
  }));
});
