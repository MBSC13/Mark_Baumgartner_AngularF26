import { Routes } from '@angular/router';
import { MtgDetail } from './Components/mtg-detail/mtg-detail';
import { MtgList } from './Components/mtg-list/mtg-list';
import { MtgForm } from './Components/mtg-form/mtg-form';


export const routes: Routes = [
  { path: '', redirectTo: '/mtg', pathMatch: 'full'},
  { path: 'mtg', component: MtgList },
  { path: 'mtg/:id', component: MtgDetail },
  { path: 'add', component: MtgForm },
  { path: 'edit/:id', component: MtgForm },
  // { path: '**', component: PageNotFound },
];
