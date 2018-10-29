import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPlayerRoutingModule } from './add-player-routing.module';
import { AddPlayerComponent } from './add-player/add-player.component';

@NgModule({
  imports: [
    CommonModule
    ,ReactiveFormsModule
    ,AddPlayerRoutingModule
  ],
  declarations: [AddPlayerComponent]
})
export class AddPlayerModule { }
