import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Standard6PageRoutingModule } from './standard6-routing.module';

import { Standard6Page } from './standard6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Standard6PageRoutingModule
  ],
  declarations: [Standard6Page]
})
export class Standard6PageModule {}
