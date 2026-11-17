import { Routes } from '@angular/router';
import { MtgDetail } from './Components/mtg-detail/mtg-detail';
import { MtgList } from './Components/mtg-list/mtg-list';
import { MtgForm } from './Components/mtg-form/mtg-form';
import { PageNotFound } from './page-not-found/page-not-found';
import { toggleGuard } from './guards/toggle-guard';


export const routes: Routes = [
  { path: '', redirectTo: '/mtg', pathMatch: 'full' },
  { path: 'mtg', component: MtgList },
  {
    path: 'mtg/:id',
    loadComponent: () => import('./Components/mtg-detail/mtg-detail').then((m) => m.MtgDetail),
  },
  {
    path: 'add',
    loadComponent: () => import('./Components/mtg-form/mtg-form').then((m) => m.MtgForm),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./Components/mtg-form/mtg-form').then((m) => m.MtgForm),
    canActivate: [toggleGuard],
  },
  // { path: 'edit/:id', component: MtgForm, canActivate: [toggleGuard] },
  { path: '**',
    loadComponent: () => import('./page-not-found/page-not-found').then((m) => m.PageNotFound) },
];
