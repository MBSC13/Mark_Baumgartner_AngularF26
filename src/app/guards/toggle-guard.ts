import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';

export const toggleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authGuard = inject(AuthGuard);

  return authGuard.guardEnabled() ? true : router.createUrlTree(['/mtg']);

};
