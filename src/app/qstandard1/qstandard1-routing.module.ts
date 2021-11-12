import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qstandard1Page } from './qstandard1.page';

const routes: Routes = [
  {
    path: '',
    component: Qstandard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qstandard1PageRoutingModule {}
