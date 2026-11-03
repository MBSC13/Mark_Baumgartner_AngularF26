import { Routes } from '@angular/router';
import { MtgDetail } from './Components/mtg-detail/mtg-detail';
import { MtgList } from './Components/mtg-list/mtg-list';


export const routes: Routes = [
  { path: '', redirectTo: '/mtg', pathMatch: 'full'},
  { path: 'mtg', component: MtgList },
  { path: 'mtg/:id', component: MtgDetail },
];
