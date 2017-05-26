import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { Building, BuildingAction } from './classes/buildings';
import { BaseService } from './base.service';
import { BuildingsService } from './buildings.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { IUnit, Drone, Overlord } from './classes/units';
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
        // see if there are enough minerals first
        if (this.base.Minerals >= 100) {
            // confirm we have enough overlords for new drones
            var overlordCount = this.units.filter(u => u.TypeId == 2).length;
            var otherUnitsCount = this.units.filter(u => u.TypeId != 2).length;
            if (overlordCount * 8 > otherUnitsCount) {
              this.base.Minerals -= 100;
              // increment id value for drones
              var droneCount = this.units.filter(u => u.TypeId == 1).length;
              var curId = 0;
              if (droneCount > 0) {
                curId = this.units.filter(u => u.TypeId == 1)[droneCount - 1].Id;
              }
              curId++;
              // create new drone with the new id
              this.units.push(new Drone(curId));
            }
            else {
              alert("Not enough Overlords. Spawn more Overlords.");
            }
        }
        else {
            alert("Not enough Minerals!");
        }
        break;
      case "CreateOverlord":
        if (this.base.Minerals >= 100) {
          this.base.Minerals -= 100;
          // increment id value for overlords
          var overlordCount = this.units.filter(u => u.TypeId == 2).length;
          var curId = 0;
          if (overlordCount > 0) {
            var curId = this.units.filter(u => u.TypeId == 2)[overlordCount - 1].Id;
          }
          curId++;
          // create new overlord with the new id
          this.units.push(new Overlord(overlordCount));
        }
    }
  }

}