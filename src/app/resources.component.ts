import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { ResourceService } from './resource.service';
import { Mineral, Vespene } from './classes/resources';
import { IUnit, Drone } from './classes/units';

@Component({
  selector: 'resources',
  templateUrl: './html/resources.component.html',
  providers: [ ResourceService, BaseService, UnitsService ] 
})
export class ResourceComponent implements OnInit {
  mineralFields: Mineral[];
  vespeneGeysers: Vespene[];
  base: Base;
  units: IUnit[];

  constructor(private resourceService: ResourceService, private baseService: BaseService,
    private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.GetMineralFields();
    this.GetVespeneGeysers();
    this.GetBase();
    this.GetUnits();
  }

  GetMineralFields() : void {
    this.resourceService.GetMineralFields().then(minerals => this.mineralFields = minerals);
  }

  GetVespeneGeysers() : void {
    this.resourceService.GetVespeneGeysers().then(vespene => this.vespeneGeysers = vespene);
  }

  GetBase() : void {
    this.baseService.GetBase().then(base => this.base = base);
  }
  
  GetUnits() : void {
      this.unitsService.GetUnits().then(unit => this.units = unit);
  }

  mineralClick() : void {
    if(this.units.length > 0){
      var droneCount = 0;
      for (var i = 0; i < this.units.length; i++) {
        if (this.units[i].TypeId == 1 && this.units[i].GatherResource == 1) {
          droneCount++;
        }
      }

      if (droneCount == 0){
        droneCount = 1;
      }

      this.base.Minerals += droneCount * 8;
    }
    else {
      this.base.Minerals++;
    }
  }

  vespeneClick(geyser: Vespene) : void {
    if (geyser.HasBuilding) {
      this.base.Vespene += 8;
    }
    else {
      this.base.Vespene++;
    }
  }

  vespeneRightClick(geyser: Vespene) {
    if (!geyser.HasBuilding){
      if (confirm("Build Extractor for 100 Minerals?")) {
        if (this.base.Minerals >= 100) {
          this.base.Minerals -= 100;
          geyser.HasBuilding = true;
          geyser.CssClass = "divExtractor";
        }
        else {
          alert("Not enough Minerals!");
        }
      }
    }
    return false;
  }
  
}
