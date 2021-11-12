import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Standard3PageRoutingModule } from './standard3-routing.module';

import { Standard3Page } from './standard3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Standard3PageRoutingModule
  ],
  declarations: [Standard3Page]
})
export class Standard3PageModule {}
