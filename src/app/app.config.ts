import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MTG_CONFIG } from './shared/mtg-config';
import { MtgMockService } from './services/mtg-mock-service';
import { MtgService } from './services/mtg-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: MTG_CONFIG,
      useValue:
        {
          apiBaseUrl: 'https://placeholder.fake.com/api',
          defaultId: 0,
          defaultName: 'Testing',
          defaultManaCost: '0',
          defaultColor: 'Colorless',
          defaultCardType: 'Test',
          defaultCreatureType: 'Test' }
    },

    { provide: MtgService, useClass: MtgMockService}
  ]
};
