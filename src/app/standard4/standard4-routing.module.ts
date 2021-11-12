import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Standard4Page } from './standard4.page';

const routes: Routes = [
  {
    path: '',
    component: Standard4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Standard4PageRoutingModule {}
