import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Standard6Page } from './standard6.page';

const routes: Routes = [
  {
    path: '',
    component: Standard6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Standard6PageRoutingModule {}
