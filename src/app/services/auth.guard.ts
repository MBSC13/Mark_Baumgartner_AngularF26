import { Service, signal } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Service()
export class AuthGuard {
  guardEnabled = signal(false);

  toggle() {
    this.guardEnabled.update(g => !g);
  }
}
