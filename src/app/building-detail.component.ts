import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { Building, BuildingAction } from './classes/buildings';
import { BaseService } from './base.service';
import { BuildingsService } from './buildings.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { IUnit, Drone, Overlord, UnitAction } from './classes/units';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
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
  droneActions: UnitAction[];

  constructor(private buildingsService: BuildingsService, private baseService: BaseService,
    private unitsService: UnitsService, private route: ActivatedRoute, private location: Location,
    private router: Router) { }

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
    this.router.navigate(['/']);
    //this.location.back();
  }

  GetUnits() : void {
      this.unitsService.GetUnits().then(unit => this.units = unit);
      this.unitsService.GetUnitActions(1).then(actions => this.droneActions = actions);
  }

  ActionClick(action: BuildingAction) {
    switch(action.ClickEvent){
      case "CreateDrone":
        // need a count of all drones to calculate costs
        var droneCount = this.units.filter(u => u.TypeId == 1).length;
        // see if there are enough minerals first
        if (this.base.Minerals >= action.MineralCost) {
            // confirm we have enough overlords for new drones
            var overlordCount = this.units.filter(u => u.TypeId == 2).length;
            var otherUnitsCount = this.units.filter(u => u.TypeId != 2).length;
            if (overlordCount * 8 > otherUnitsCount) {
              this.base.Minerals -= action.MineralCost;
              // increment id value for drones
              var curDroneId = 0;
              if (droneCount > 0) {
                curDroneId = this.units.filter(u => u.TypeId == 1)[droneCount - 1].Id;
              }
              curDroneId++;
              // create new drone with the new id
              var dActions = new Array<UnitAction>();
              dActions = this.droneActions.slice(0);
              var drone = new Drone(curDroneId, dActions);
              this.units.push(drone);
              action.MineralCost += Math.ceil(action.MineralCost * 1.1);
            }
            else {
              alert("We require more Overlords. Spawn more Overlords.");
            }
        }
        else {
            alert("We require more Minerals!");
        }
        break;
      case "CreateOverlord":
        // need overlord count for costs
        var overlordCount = this.units.filter(u => u.TypeId == 2).length;
        if (this.base.Minerals >= action.MineralCost) {
          this.base.Minerals -= action.MineralCost;
          // increment id value for overlords
          var curOverlordId = 0;
          if (overlordCount > 0) {
            var curOverlordId = this.units.filter(u => u.TypeId == 2)[overlordCount - 1].Id;
          }
          curOverlordId++;
          // create new overlord with the new id
          var overlord = new Overlord(curOverlordId);
          this.units.push(overlord);
          action.MineralCost += Math.ceil(action.MineralCost * 1.3);
        }
        else {
          alert("We require more Minerals!");
        }
    }
  }

}