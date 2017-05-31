import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { BaseService } from './base.service';
import { UnitsService } from './units.service';
import { ResourceService } from './resource.service';
import { Mineral, Vespene } from './classes/resources';
import { IUnit, Drone } from './classes/units';
import { Router } from '@angular/router';

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
    private unitsService: UnitsService, private router: Router) { }

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
    var overlordCount = this.units.filter(d => d.TypeId == 2).length;
    this.base.Minerals += (1 + (overlordCount * 4));
  }

  vespeneClick(geyser: Vespene) : void {
    this.router.navigate(['/resource-detail', geyser.Id]);
    this.base.Vespene += (1 + (geyser.BuildingLevel * 4));
  }

  vespeneRightClick(geyser: Vespene) {
    // if (!geyser.HasBuilding){
    //   if (confirm("Build Extractor for 100 Minerals?")) {
    //     if (this.base.Minerals >= 100) {
    //       this.base.Minerals -= 100;
    //       geyser.HasBuilding = true;
    //       geyser.CssClass = "divExtractor";
    //     }
    //     else {
    //       alert("Not enough Minerals!");
    //     }
    //   }
    // }
    return false;
  }
  
}
