import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Standard2PageRoutingModule } from './standard2-routing.module';

import { Standard2Page } from './standard2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Standard2PageRoutingModule
  ],
  declarations: [Standard2Page]
})
export class Standard2PageModule {}
