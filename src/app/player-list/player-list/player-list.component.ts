import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../core/Player.service';
import { CricketPlayerModel } from '../../cricket-player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  public playersdata:CricketPlayerModel[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers(): void {
    this.playerService.getPlayers()    
    .subscribe(players => this.playersdata = players);
  }
}
