import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { IUnit, Drone } from './classes/units';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-units',
  templateUrl: './html/units.component.html',
  providers: [ UnitsService, BaseService ] 
})
export class UnitsComponent implements OnInit {
  base: Base;
  units: IUnit[];

  constructor(private unitsService: UnitsService, private baseService: BaseService, private router: Router) { }
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

  UnitClick(unit: IUnit) : void {
    this.router.navigate(['/unit-details', unit.TypeId, unit.Id]);
  }
}