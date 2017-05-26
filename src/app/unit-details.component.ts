import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { ResourceService } from './resource.service';
import { IUnit, Drone, Overlord } from './classes/units';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'unit-details',
  templateUrl: './html/unit-details.component.html',
  providers: [ ResourceService, BaseService, UnitsService ] 
})
export class ResourceDetailComponent {
  base: Base;
  geyser: Vespene;
  unit: IUnit;

  constructor(private resourcesService: ResourceService, private baseService: BaseService,
    private unitsService: UnitsService, private route: ActivatedRoute, private location: Location) { }

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
    this.location.back();
  }

  ActionClick() {
    return false;
  }

}