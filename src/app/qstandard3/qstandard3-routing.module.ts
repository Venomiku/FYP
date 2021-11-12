import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qstandard3Page } from './qstandard3.page';

const routes: Routes = [
  {
    path: '',
    component: Qstandard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qstandard3PageRoutingModule {}
