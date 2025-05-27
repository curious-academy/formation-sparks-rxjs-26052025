import { Routes } from '@angular/router';
import { ListComponent } from './features/movies/list/list.component';
import { FromEventComponent } from './learnings/from-event/from-event.component';
import { AddComponent } from './features/movies/add/add.component';
import { ScanComponent } from './learnings/scan/scan.component';
import { ShareReplayComponent } from './learnings/share-replay/share-replay.component';
import { ReplaySubjectComponent } from './learnings/replay-subject/replay-subject.component';
import { AgregatorsComponent } from './learnings/agregators/agregators.component';
import { CombineLatestComponent } from './learnings/combine-latest/combine-latest.component';

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
    path: 'share-replay',
    component: ShareReplayComponent
  },
  {
    path: 'replay-subject',
    component: ReplaySubjectComponent
  },
  {
    path: 'agregators',
    component: AgregatorsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'combine-latest',
    component: CombineLatestComponent
  }
];
