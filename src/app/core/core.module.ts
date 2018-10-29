import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { PlayerService } from './Player.service';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [SidebarComponent,TopbarComponent],
  exports:[SidebarComponent,TopbarComponent],
  providers:[PlayerService]
})
export class CoreModule { }
