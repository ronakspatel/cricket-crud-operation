import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//routing apply for home,app-player,player-list
const routes: Routes = [
  {
    path:'',
    loadChildren:'./home/home.module#HomeModule'
  },
  
  {
    path:'addplayer',
    loadChildren:'./add-player/add-player.module#AddPlayerModule'
  },
  {
    path:'playerlist',
    loadChildren:'./player-list/player-list.module#PlayerListModule'
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
