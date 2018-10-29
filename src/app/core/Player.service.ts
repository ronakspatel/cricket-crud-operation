import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CricketPlayerModel } from '../cricket-player.model';


@Injectable()
export class PlayerService {
  private playerUrl = 'api/playerData';

  
  constructor(
    private http: HttpClient
  ) { }

  getPlayers (): Observable<CricketPlayerModel[]> {
    return this.http.get<CricketPlayerModel[]>(this.playerUrl)
  }
  addPlayerData (formdata): Observable<CricketPlayerModel> {
    return this.http.post<CricketPlayerModel>(this.playerUrl, formdata)
  }

}


