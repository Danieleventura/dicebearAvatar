import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdventurerPageRoutingModule } from './adventurer-routing.module';

import { AdventurerPage } from './adventurer.page';
import { NgxColorsModule } from 'ngx-colors';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdventurerPageRoutingModule,
    NgxColorsModule
  ],
  providers:[AndroidPermissions],
  declarations: [AdventurerPage]
})
export class AdventurerPageModule {}
