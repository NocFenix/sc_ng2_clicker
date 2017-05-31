import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene, ResourceAction } from './classes/resources';
import { ResourceService } from './resource.service';
import { IUnit, Drone } from './classes/units';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'resource-detail',
  templateUrl: './html/resource-detail.component.html',
  providers: [ ResourceService, BaseService, UnitsService ] 
})
export class ResourceDetailComponent {
  base: Base;
  geyser: Vespene;
  units: IUnit[];

  constructor(private resourcesService: ResourceService, private baseService: BaseService,
    private unitsService: UnitsService, private route: ActivatedRoute, private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.resourcesService.GetGeyser(+params['id']))
        .subscribe(g => this.geyser = g);
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
  }

  ActionClick(action: ResourceAction) {
    switch(action.ClickEvent){
      case "BuildExtractor":
        if (this.base.Minerals >= action.MineralCost) {
          this.base.Minerals -= action.MineralCost;
          this.geyser.HasBuilding = true;
          this.geyser.BuildingLevel++;
          this.geyser.CssClass = "divExtractor";
          this.geyser.Name = "Extractor";
          // update the action with its new purpose
          action.Name = "Expand Tunnels";
          action.Description = "Expands the Extractor tunnels to enable increased Vespene Gas output.";
          action.ClickEvent = "ExpandTunnels";
          action.MineralCost = 150;
          action.VespeneCost = 50;
          this.geyser.Actions[0] = action;
        }
        else {
          alert("We require more Minerals!");
        }
        break;
      case "ExpandTunnels":
        if (this.base.Minerals >= action.MineralCost) {
          if (this.base.Vespene >= action.VespeneCost) {
            this.base.Minerals -= action.MineralCost;
            this.base.Vespene -= action.VespeneCost;
            this.geyser.BuildingLevel++;

            action.MineralCost += Math.ceil(action.MineralCost * 1.5);
            action.VespeneCost += Math.ceil(action.VespeneCost * 1.5);
          }
          else {
            alert("We require more Vespene Gas!");
          }
        }
        else {
          alert("We require more Minerals!");
        }
        break;
    }
    return false;
  }

}