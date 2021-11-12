import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qstandard6PageRoutingModule } from './qstandard6-routing.module';

import { Qstandard6Page } from './qstandard6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qstandard6PageRoutingModule
  ],
  declarations: [Qstandard6Page]
})
export class Qstandard6PageModule {}
