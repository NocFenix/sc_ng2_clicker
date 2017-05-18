import { Injectable } from '@angular/core';
import { Building } from './classes/buildings';
import { BUILDINGS } from './mock-base';

@Injectable()
export class BuildingsService {

    GetBuildings(): Promise<Building[]> {
        return Promise.resolve(BUILDINGS);
    }
    
}