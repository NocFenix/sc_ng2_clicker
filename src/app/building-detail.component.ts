import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { Building, BuildingAction } from './classes/buildings';
import { BaseService } from './base.service';
import { BuildingsService } from './buildings.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { IUnit, Drone } from './classes/units';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'building-detail',
  templateUrl: './html/building-detail.component.html',
  providers: [ BuildingsService, BaseService, UnitsService ] 
})
export class BuildingDetailComponent {
  base: Base;
  building: Building;
  units: IUnit[];

  constructor(private buildingsService: BuildingsService, private baseService: BaseService,
    private unitsService: UnitsService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.buildingsService.GetBuilding(+params['id']))
        .subscribe(b => this.building = b);
    this.GetBase();
    this.GetUnits();
  }

  GetBase() : void {
    this.baseService.GetBase().then(base => this.base = base);
  }

  close() : void {
    this.location.back();
  }

  GetUnits() : void {
      this.unitsService.GetUnits().then(unit => this.units = unit);
  }

  ActionClick(action: BuildingAction) {
    switch(action.ClickEvent){
      case "CreateDrone":
        if (this.base.Minerals >= 100) {
            this.base.Minerals -= 100;
            this.units.push(new Drone(1));
        }
        else {
            alert("Not enough Minerals!");
        }
        break;
    }
  }

}