import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qstandard2PageRoutingModule } from './qstandard2-routing.module';

import { Qstandard2Page } from './qstandard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qstandard2PageRoutingModule
  ],
  declarations: [Qstandard2Page]
})
export class Qstandard2PageModule {}
