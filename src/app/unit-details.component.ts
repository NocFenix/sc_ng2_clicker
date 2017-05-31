import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { ResourceService } from './resource.service';
import { IUnit, Drone, Overlord, UnitAction } from './classes/units';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'unit-details',
  templateUrl: './html/unit-details.component.html',
  providers: [ ResourceService, BaseService, UnitsService ] 
})
export class UnitDetailComponent {
  base: Base;
  geyser: Vespene;
  unit: IUnit;
  mineralInterval: number;
  vespeneInterval: number;

  constructor(private resourcesService: ResourceService, private baseService: BaseService,
    private unitsService: UnitsService, private route: ActivatedRoute, private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.unitsService.GetUnit(+params['typeId'],+params['id']))
        .subscribe(u => this.unit = u);
    this.GetBase();
  }

  GetBase() : void {
    this.baseService.GetBase().then(base => this.base = base);
  }

  close() : void {
    this.router.navigate(['/']);
    //this.location.back();
  }

  ActionClick(action: UnitAction) {
    switch (action.ClickEvent){
      case "GatherMinerals":
        if (action.ButtonLabel == "Gather") {
          action.ButtonLabel = "Stop";
          // make sure drone doesn't keep getting vespene
          var otherAction = this.unit.Actions[1];
          clearInterval(this.mineralInterval);
          clearInterval(this.vespeneInterval);
          otherAction.ButtonLabel = "Gather";
          // start gathering minerals
          this.mineralInterval = setInterval(this.GatherMinerals.bind(this), 1000);
        }
        else {
          clearInterval(this.mineralInterval);
          clearInterval(this.vespeneInterval);
          action.ButtonLabel = "Gather";
        }
        break;
      case "GatherVespene":
        if (action.ButtonLabel == "Gather") {
          action.ButtonLabel = "Stop";
          // make sure drone doesn't keep getting minerals
          var otherAction = this.unit.Actions[0];
          clearInterval(this.vespeneInterval);
          clearInterval(this.mineralInterval);
          otherAction.ButtonLabel = "Gather";
          // start gathering vespene
          this.vespeneInterval = setInterval(this.GatherVespene.bind(this), 1000);
        }
        else {
          clearInterval(this.mineralInterval);
          clearInterval(this.vespeneInterval);
          action.ButtonLabel = "Gather";
        }
        break;
    }
    return false;
  }

  GatherMinerals() : void {
    this.base.Minerals++;
  }

  GatherVespene() : void {
    this.base.Vespene++;
  }

}