import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Qstandard5Page } from './qstandard5.page';

const routes: Routes = [
  {
    path: '',
    component: Qstandard5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Qstandard5PageRoutingModule {}
