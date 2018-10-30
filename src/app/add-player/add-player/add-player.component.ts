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
  //create array type model to store some data
  public playersdata: CricketPlayerModel[];
  //submit type boolean
  public submitted: boolean;
  //inject playerservice and formBilder
  constructor(private playerService: PlayerService, private fb: FormBuilder) {
    //submit function by default false
    this.submitted = false;
  }
  //create formcontrol and apply some validation
  profileForm = this.fb.group({
    Id: [''],
    playerName: ['', Validators.required],
    nickName: ['', Validators.required],
    birthday: ['', Validators.required],
    nationality: ['', Validators.required],
    Age: ['', Validators.required],
    fatherName: ['', Validators.required],
    motherName: ['', Validators.required],
  });
  ngOnInit() {
    //call getPlayer method
    this.getPlayers();
  }
  //call getplayer method in over service and subscribe in playersdata array 
  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.playersdata = players);
  }
  //pass data from form to service using postPlayerdata function in service method call
  onSubmit(formdata) {
    this.submitted = true;
    console.log(formdata);

    this.playerService.postPlayerData(formdata)
      .subscribe(player => {
        this.playersdata.push(player);
        alert("data will be post");
      });

  }


}
