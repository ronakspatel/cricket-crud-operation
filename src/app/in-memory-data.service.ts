import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CricketPlayerModel } from './cricket-player.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const playerData: CricketPlayerModel[] = [
            {
                playerId:1,
                playerName: 'Sachin  Tendulkar',
                nickName: ' Master Blaster',
                birthday: '24/04/1973',
                nationality: 'India',
                Age: 45,
                fatherName:' string Ramesh Tendulkar',
                motherName: ' Rajni Tendulkar'
            }

        ];
        return { playerData };
    }
    genId(playerData: CricketPlayerModel[]): number {
        return playerData.length > 0 ? Math.max(...playerData.map(playerData => playerData.playerId)) + 1 : 1;
      }
}