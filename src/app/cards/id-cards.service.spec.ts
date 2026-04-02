import { TestBed } from '@angular/core/testing';

import { IdCardsService } from './id-cards.service';

describe('IdCardsService', () => {
  let service: IdCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
