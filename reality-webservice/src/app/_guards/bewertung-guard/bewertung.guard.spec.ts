import { TestBed, async, inject } from '@angular/core/testing';

import { BewertungGuard } from './bewertung.guard';

describe('BewertungGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BewertungGuard]
    });
  });

  it('should ...', inject([BewertungGuard], (guard: BewertungGuard) => {
    expect(guard).toBeTruthy();
  }));
});
