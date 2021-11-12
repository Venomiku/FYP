import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qstandard4Page } from './qstandard4.page';

const routes: Routes = [
  {
    path: '',
    component: Qstandard4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qstandard4PageRoutingModule {}
