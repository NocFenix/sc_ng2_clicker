"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var base_service_1 = require("./base.service");
var buildings_service_1 = require("./buildings.service");
var units_service_1 = require("./units.service");
var router_1 = require("@angular/router");
var BuildingsComponent = (function () {
    function BuildingsComponent(buildingsService, baseService, unitsService, router) {
        this.buildingsService = buildingsService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.router = router;
    }
    BuildingsComponent.prototype.ngOnInit = function () {
        this.GetBase();
        this.GetBuildings();
        this.GetUnits();
    };
    BuildingsComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    BuildingsComponent.prototype.GetBuildings = function () {
        var _this = this;
        this.buildingsService.GetBuildings().then(function (b) { return _this.buildings = b; });
    };
    BuildingsComponent.prototype.GetUnits = function () {
        var _this = this;
        this.unitsService.GetUnits().then(function (unit) { return _this.units = unit; });
    };
    BuildingsComponent.prototype.BuildingClick = function (building) {
        this.router.navigate(['/building-detail', building.Id]);
        // switch (building.Id) {
        //     case 1:
        //         if (confirm("Spawn Drone for 100 Minerals?")) {
        //             if (this.base.Minerals >= 100) {
        //                 this.base.Minerals -= 100;
        //                 this.units.push(new Drone(1));
        //                 this.UpdateUnits();
        //             }
        //             else {
        //                 alert("Not enough Minerals!");
        //             }
        //         }
        //         break;
        // }
    };
    BuildingsComponent.prototype.UpdateUnits = function () {
    };
    BuildingsComponent.prototype.BuildingContextClick = function (building) {
        switch (building.Id) {
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
    };
    return BuildingsComponent;
}());
BuildingsComponent = __decorate([
    core_1.Component({
        selector: 'my-buildings',
        templateUrl: './html/buildings.component.html',
        providers: [buildings_service_1.BuildingsService, base_service_1.BaseService, units_service_1.UnitsService]
    }),
    __metadata("design:paramtypes", [buildings_service_1.BuildingsService, base_service_1.BaseService,
        units_service_1.UnitsService, router_1.Router])
], BuildingsComponent);
exports.BuildingsComponent = BuildingsComponent;
//# sourceMappingURL=buildings.component.js.map