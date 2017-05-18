import { Injectable } from '@angular/core';
import { Unit } from './classes/units';
import { Mineral, Vespene } from './classes/resources';
import { UNITS } from './mock-base';

@Injectable()
export class UnitsService {
    GetUnits(): Promise<Unit[]> {
        return Promise.resolve(UNITS);
    }
}