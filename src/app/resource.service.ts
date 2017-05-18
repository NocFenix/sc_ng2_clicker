import { Injectable } from '@angular/core';
import { Mineral, Vespene } from './classes/resources';
import { BASE, MINERAL_FIELDS, VESPENE_GEYSERS } from './mock-base';

@Injectable()
export class ResourceService {
    GetMineralFields(): Promise<Mineral[]> {
        return Promise.resolve(MINERAL_FIELDS);
    }
    GetVespeneGeysers(): Promise<Vespene[]> {
        return Promise.resolve(VESPENE_GEYSERS);
    }

    GetMinerals(): Promise<number> {
        return Promise.resolve(BASE.Minerals);
    }
    GetVespene(): Promise<number> {
        return Promise.resolve(BASE.Vespene);
    }
    GetCredits(): Promise<number> {
        return Promise.resolve(BASE.Credits);
    }
    GetLevel(): Promise<number> {
        return Promise.resolve(BASE.Level);
    }
}