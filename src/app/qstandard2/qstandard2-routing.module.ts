import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qstandard2Page } from './qstandard2.page';

const routes: Routes = [
  {
    path: '',
    component: Qstandard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qstandard2PageRoutingModule {}
