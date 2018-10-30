import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CricketPlayerModel } from './cricket-player.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const playerData: CricketPlayerModel[] = [
            {
                Id:1,
                playerName: 'Sachin  Tendulkar',
                nickName: ' Master Blaster',
                birthday: '1970-04-24',
                nationality: 'India',
                Age: 45,
                fatherName:' Ramesh Tendulkar',
                motherName: ' Rajni Tendulkar'
            }

        ];
        return { playerData };
    }
    genId(playerData: CricketPlayerModel[]): number {
        return playerData.length > 0 ? Math.max(...playerData.map(playerData => playerData.Id)) + 1 : 1;
      }
}