import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qstandard6Page } from './qstandard6.page';

const routes: Routes = [
  {
    path: '',
    component: Qstandard6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qstandard6PageRoutingModule {}
