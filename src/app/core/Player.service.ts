import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CricketPlayerModel } from '../cricket-player.model';


@Injectable()
export class PlayerService {
//base api store in playerUrl
  private playerUrl = 'api/playerData';

  //inject httpclient service 
  constructor(
    private http: HttpClient
  ) { }
    //get data from server to component
  getPlayers (): Observable<CricketPlayerModel[]> {
    return this.http.get<CricketPlayerModel[]>(this.playerUrl);
  }
  //post data from component to server
  postPlayerData (formdata): Observable<CricketPlayerModel> {
    return this.http.post<CricketPlayerModel>(this.playerUrl, formdata);
  }
  deletePlayer (player: CricketPlayerModel | number): Observable<CricketPlayerModel> {
    const id = typeof player === 'number' ? player : player.Id;
    const url = `${this.playerUrl}/${id}`;
 
    return this.http.delete<CricketPlayerModel>(url)
  }

}


