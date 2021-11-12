import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Standard3Page } from './standard3.page';

const routes: Routes = [
  {
    path: '',
    component: Standard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Standard3PageRoutingModule {}
