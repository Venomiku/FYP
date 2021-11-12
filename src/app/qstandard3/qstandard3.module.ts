import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Qstandard3PageRoutingModule } from './qstandard3-routing.module';

import { Qstandard3Page } from './qstandard3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Qstandard3PageRoutingModule
  ],
  declarations: [Qstandard3Page]
})
export class Qstandard3PageModule {}
