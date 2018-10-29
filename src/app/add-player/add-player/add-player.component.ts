import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CricketPlayerModel } from '../../cricket-player.model';
import { PlayerService } from '../../core/Player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  public playersdata:CricketPlayerModel[];
  public submitted:boolean;

  constructor(private playerService: PlayerService, private fb: FormBuilder) {
    this.submitted=false;
   }
  profileForm = this.fb.group({
    Id: ['', Validators.required],
    playerName: ['', Validators.required],
    nickName: ['',Validators.required],
    birthday: ['',Validators.required],
    nationality: ['',Validators.required],
    Age: ['',Validators.required],
    fatherName: ['',Validators.required],
    motherName: ['',Validators.required],
  });
  ngOnInit() {
    this.getPlayers();
  }
  getPlayers(): void {
    this.playerService.getPlayers()    
    .subscribe(players => this.playersdata = players);
  }
  onSubmit(formdata) {
    this.submitted = true;
    console.log(formdata);
    
    this.playerService.addPlayerData(formdata)
      .subscribe(player => {
        this.playersdata.push(player);
      });
    
  }
  

}
