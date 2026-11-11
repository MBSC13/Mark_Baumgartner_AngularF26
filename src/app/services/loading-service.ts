import { computed, Service, signal } from '@angular/core';

@Service()
export class LoadingService {
  //Signal to hold active requests
  private reqsInProgress = signal(0);

  //Computed isLoading that is true while count is above zero
  isLoading = computed(() => this.reqsInProgress() > 0);

  addReq(): void {
    this.reqsInProgress.update((n) => n + 1);
  }

  //Decrease count, but never below zero
  endReq(): void {
    this.reqsInProgress.update((n) => Math.max(0, n - 1));
  }
}
