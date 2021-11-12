import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qstandard4PageRoutingModule } from './qstandard4-routing.module';

import { Qstandard4Page } from './qstandard4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qstandard4PageRoutingModule
  ],
  declarations: [Qstandard4Page]
})
export class Qstandard4PageModule {}
