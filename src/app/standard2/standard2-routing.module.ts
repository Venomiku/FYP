import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Standard2Page } from './standard2.page';

const routes: Routes = [
  {
    path: '',
    component: Standard2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Standard2PageRoutingModule {}
