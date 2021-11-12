import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qstandard5PageRoutingModule } from './qstandard5-routing.module';

import { Qstandard5Page } from './qstandard5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qstandard5PageRoutingModule
  ],
  declarations: [Qstandard5Page]
})
export class Qstandard5PageModule {}
