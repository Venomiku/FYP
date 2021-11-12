import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qstandard1PageRoutingModule } from './qstandard1-routing.module';

import { Qstandard1Page } from './qstandard1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qstandard1PageRoutingModule
  ],
  declarations: [Qstandard1Page]
})
export class Qstandard1PageModule {}
