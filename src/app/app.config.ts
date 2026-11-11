import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { MTG_CONFIG } from './shared/mtg-config';
import { MtgMockService } from './services/mtg-mock-service';
import { MtgService } from './services/mtg-service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { errorInterceptor } from './interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    /*
     Registering interceptors:
     Interceptors form a chain where each interceptor processes the request or response
     before forwarding to the next interceptor in the chain.
     I don't think the order matters here because the two don't interact with each other
     */
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor])),
    {
      provide: MTG_CONFIG,
      useValue: {
        apiBaseUrl: 'https://api.scryfall.com',
        defaultId: '0',
        defaultName: 'Testing',
        defaultManaCost: '0',
        defaultColor: 'Colorless',
        defaultCardType: 'Test',
        defaultCreatureType: 'Test',
      },
    },

    // { provide: MtgService, useClass: MtgMockService}
  ],
};
