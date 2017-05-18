import { Component, OnInit } from '@angular/core';
import { Base } from './classes/base';
import { Building } from './classes/buildings';
import { BaseService } from './base.service';
import { BuildingsService } from './buildings.service';
import { UnitsService } from './units.service';
import { Mineral, Vespene } from './classes/resources';
import { Unit } from './classes/units';

@Component({
  selector: 'my-buildings',
  templateUrl: './html/buildings.component.html',
  providers: [ BuildingsService, BaseService, UnitsService ] 
})
export class BuildingsComponent implements OnInit {
  base: Base;
  buildings: Building[];
  units: Unit[];

  constructor(private buildingsService: BuildingsService, private baseService: BaseService,
    private unitsService: UnitsService) { }

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
    switch (building.Id){
        case 1:
            if (confirm("Spawn Drone for 100 Minerals?")){
                if (this.base.Minerals >= 100) {
                    this.base.Minerals -= 100;
                    this.units.push(new Unit(1, "Drone", "divDrone"));
                    this.UpdateUnits();
                }
                else {
                    alert("Not enough Minerals!");
                }
            }
            break;
    }
  }

  UpdateUnits() : void {

  }

  BuildingContextClick(building: Building) {
    switch (building.Id){
        case 1:
            // var hasSpawningPool = false;
            // for(var i = 0; i < this.buildings.length; i++){
            //     if (this.buildings[i].Id == 7) {
            //         hasSpawningPool = true;
            //         break;
            //     }
            // }
            // if (confirm("Spawn Drone for 100 Minerals?")){
            //     if (this.base.Minerals >= 100) {
            //         this.base.Minerals -= 100;
            //         this.units.push(new Unit(1, "Drone", "divDrone"));
            //         this.UpdateUnits();
            //     }
            //     else {
            //         alert("Not enough Minerals!");
            //     }
            // }
            break;
    }
    return false;
  }

}