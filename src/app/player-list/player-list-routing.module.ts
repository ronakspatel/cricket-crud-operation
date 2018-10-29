import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  {
    path:'',
    component:PlayerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerListRoutingModule { }
