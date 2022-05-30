import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdventurerPage } from './adventurer.page';

const routes: Routes = [
  {
    path: '',
    component: AdventurerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventurerPageRoutingModule {}
