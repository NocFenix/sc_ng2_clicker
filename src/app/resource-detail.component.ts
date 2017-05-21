import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { ResourceService } from './resource.service';
import { IUnit, Drone } from './classes/units';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
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
    private unitsService: UnitsService, private route: ActivatedRoute, private location: Location) { }

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
    this.location.back();
  }

  GetUnits() : void {
      this.unitsService.GetUnits().then(unit => this.units = unit);
  }

  ActionClick() {
    if (!this.geyser.HasBuilding) {
        if (this.base.Minerals >= 100) {
          this.base.Minerals -= 100;
          this.geyser.HasBuilding = true;
          this.geyser.CssClass = "divExtractor";
          this.geyser.Name = "Extractor";
        }
        else {
          alert("Not enough Minerals!");
        }
    }
    return false;
  }

}