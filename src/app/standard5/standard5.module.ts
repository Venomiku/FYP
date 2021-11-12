import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Standard5PageRoutingModule } from './standard5-routing.module';

import { Standard5Page } from './standard5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Standard5PageRoutingModule
  ],
  declarations: [Standard5Page]
})
export class Standard5PageModule {}
