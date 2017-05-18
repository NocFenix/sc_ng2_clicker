import { Injectable } from '@angular/core';
import { Base } from './classes/base';
import { BASE } from './mock-base';

@Injectable()
export class BaseService {
    base: Base;

    GetBase(): Promise<Base> {
        this.base = BASE;
        return Promise.resolve(this.base);
    }

    UpdateBase(updateBase: Base): void {
        this.base = updateBase;
    }
}