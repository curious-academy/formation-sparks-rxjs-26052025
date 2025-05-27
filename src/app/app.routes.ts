import { Routes } from '@angular/router';
import { ListComponent } from './features/movies/list/list.component';
import { FromEventComponent } from './learnings/from-event/from-event.component';
import { AddComponent } from './features/movies/add/add.component';
import { ScanComponent } from './learnings/scan/scan.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: ListComponent
  },
  {
    path: 'from-event',
    component: FromEventComponent
  },
  {
    path: 'scan',
    component: ScanComponent
  },
  {
    path: 'add',
    component: AddComponent
  }
];
