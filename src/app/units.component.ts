import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { Unit } from './classes/units';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';

@Component({
  selector: 'my-units',
  templateUrl: './html/units.component.html',
  providers: [ UnitsService, BaseService ] 
})
export class UnitsComponent implements OnInit {
  base: Base;
  units: Unit[];

  constructor(private unitsService: UnitsService, private baseService: BaseService) { }
  ngOnInit(): void {
    this.GetBase();
    this.GetUnits();
  }

  GetBase() : void {
    this.baseService.GetBase().then(base => this.base = base);
  }

  GetUnits() : void {
      this.unitsService.GetUnits().then(unit => this.units = unit);
  }

  UnitClick(unit: Unit) : void {
    
  }
}