import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../core/Player.service';
import { CricketPlayerModel } from '../../cricket-player.model';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  //create array type model to store data
  public playersdata:CricketPlayerModel[];
 //inject playerservice
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    // call getplayer
    this.getPlayers();
  }
  //call getplayers method in service and store o/p subscribe 
  getPlayers(): void {
    this.playerService.getPlayers()    
    .subscribe(players => this.playersdata = players);
  }
  //delete player 
  deletePlayer(player: CricketPlayerModel): void {
    this.playersdata = this.playersdata.filter(p => p !== player);
    this.playerService.deletePlayer(player).subscribe();
    console.log(player);
    
  }
  editPlayer(player:CricketPlayerModel){
    
  }
}
