import { Injectable } from '@angular/core';
import { IUnit } from './classes/units';
import { UNITS } from './mock-base';

@Injectable()
export class UnitsService {
    GetUnits(): Promise<IUnit[]> {
        return Promise.resolve(UNITS);
    }
}