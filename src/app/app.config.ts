import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MTG_CONFIG } from './shared/mtg-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: MTG_CONFIG,
      useValue:
        { apiBaseUrl: 'https://placeholder.fake.com/api', defaultCardType: 'Test' }
    }
  ]
};
