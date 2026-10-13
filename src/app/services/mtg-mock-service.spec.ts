import { TestBed } from '@angular/core/testing';
import { MtgMockService } from './mtg-mock-service';

describe('MtgMockService', () => {
  let service: MtgMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtgMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
