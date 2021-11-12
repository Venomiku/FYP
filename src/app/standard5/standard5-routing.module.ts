import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Standard5Page } from './standard5.page';

const routes: Routes = [
  {
    path: '',
    component: Standard5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Standard5PageRoutingModule {}
