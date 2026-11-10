import { InjectionToken } from '@angular/core';

export interface MtgConfig {
  apiBaseUrl: string;
  defaultId: string;
  defaultName: string;
  defaultManaCost: string;
  defaultColor: string;
  defaultCardType: string;
  defaultCreatureType: string;
}

export const MTG_CONFIG = new InjectionToken<MtgConfig>('mtg.config')
