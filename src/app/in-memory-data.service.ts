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
            },
            {
                Id:2,
                playerName: 'Virat Kohli',
                nickName: ' Cheeku',
                birthday: '1988-11-05',
                nationality: 'India',
                Age:  29,
                fatherName:' Prem Kohli',
                motherName: ' Saroj Kohli'
            },
            {
                Id:3,
                playerName: 'Virat Kohli',
                nickName: ' Cheeku',
                birthday: '1988-11-05',
                nationality: 'India',
                Age:  29,
                fatherName:' Prem Kohli',
                motherName: ' Saroj Kohli'
            }

        ];
        return { playerData };
    }
    genId(playerData: CricketPlayerModel[]): number {
        return playerData.length > 0 ? Math.max(...playerData.map(playerData => playerData.Id)) + 1 : 1;
      }
}