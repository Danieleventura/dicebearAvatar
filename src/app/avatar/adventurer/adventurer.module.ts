import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventurerPageRoutingModule } from './adventurer-routing.module';

import { AdventurerPage } from './adventurer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdventurerPageRoutingModule
  ],
  declarations: [AdventurerPage]
})
export class AdventurerPageModule {}
