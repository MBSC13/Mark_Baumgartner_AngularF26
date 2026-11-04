import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { toggleGuard } from './toggle-guard';

describe('toggleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => toggleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
