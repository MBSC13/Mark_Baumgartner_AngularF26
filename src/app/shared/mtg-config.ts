import { InjectionToken } from '@angular/core';

export interface MtgConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const MTG_CONFIG = new InjectionToken<MtgConfig>('mtg.config')
