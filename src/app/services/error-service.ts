import { Service, signal } from '@angular/core';

@Service()
export class ErrorService {
  //Signal with current error message or null (default null)
  private errorMessage = signal<string | null>(null);

  message = this.errorMessage.asReadonly();

  show(message: string): void {
    this.errorMessage.set(message);
  }

  clear(): void {
    this.errorMessage.set(null);
  }
}
