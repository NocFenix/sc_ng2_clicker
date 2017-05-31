import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { Building } from './classes/buildings';
import { BaseService } from './base.service';
import { BuildingsService } from './buildings.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { IUnit, Drone } from './classes/units';
import { Router } from '@angular/router';

@Component({
  selector: 'my-buildings',
  templateUrl: './html/buildings.component.html',
  providers: [ BuildingsService, BaseService, UnitsService ] 
})
export class BuildingsComponent implements OnInit {
  base: Base;
  buildings: Building[];
  units: IUnit[];

  constructor(private buildingsService: BuildingsService, private baseService: BaseService,
    private unitsService: UnitsService, private router: Router) { }

  ngOnInit(): void {
    this.GetBase();
    this.GetBuildings();
    this.GetUnits();
  }

  GetBase() : void {
    this.baseService.GetBase().then(base => this.base = base);
  }

  GetBuildings() : void {
    this.buildingsService.GetBuildings().then(b => this.buildings = b)
  }

  GetUnits() : void {
      this.unitsService.GetUnits().then(unit => this.units = unit);
  }

  BuildingClick(building: Building) : void {
    this.router.navigate(['/building-detail', building.Id]);
  }

  BuildingContextClick(building: Building) {
    switch (building.Id){
        case 1:
            break;
    }
    return false;
  }

}