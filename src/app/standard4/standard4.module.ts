import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Standard4PageRoutingModule } from './standard4-routing.module';

import { Standard4Page } from './standard4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Standard4PageRoutingModule
  ],
  declarations: [Standard4Page]
})
export class Standard4PageModule {}
