import { Routes } from '@angular/router';
import { MtgDetail } from './Components/mtg-detail/mtg-detail';
import { MtgList } from './Components/mtg-list/mtg-list';
import { MtgForm } from './Components/mtg-form/mtg-form';
import { PageNotFound } from './page-not-found/page-not-found';
import { toggleGuard } from './guards/toggle-guard';


export const routes: Routes = [
  { path: '', redirectTo: '/mtg', pathMatch: 'full'},
  { path: 'mtg', component: MtgList },
  { path: 'mtg/:id', component: MtgDetail },
  { path: 'add', component: MtgForm },
  { path: 'edit/:id', component: MtgForm, canActivate: [toggleGuard] },
  { path: '**', component: PageNotFound },
];
