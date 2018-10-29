import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerListRoutingModule } from './player-list-routing.module';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerListRoutingModule
  ],
  declarations: [PlayerListComponent]
})
export class PlayerListModule { }
