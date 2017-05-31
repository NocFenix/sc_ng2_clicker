import { Injectable } from '@angular/core';
import { IUnit } from './classes/units';
import { UNITS, DRONEActions } from './mock-base';

@Injectable()
export class UnitsService {
    GetUnits(): Promise<IUnit[]> {
        return Promise.resolve(UNITS);
    }

    GetUnit(typeId: number, id: number) {
        return this.GetUnits().then(units => units.filter(u => u.TypeId == typeId).find(u => u.Id == id));
    }

    GetUnitActions(typeId: number){
        switch (typeId){
            case 1:
                return Promise.resolve(DRONEActions);
            default:
                return null;
        }
    }
}