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
var units_1 = require("./classes/units");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var BuildingDetailComponent = (function () {
    function BuildingDetailComponent(buildingsService, baseService, unitsService, route, location, router) {
        this.buildingsService = buildingsService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    BuildingDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.buildingsService.GetBuilding(+params['id']); })
            .subscribe(function (b) { return _this.building = b; });
        this.GetBase();
        this.GetUnits();
    };
    BuildingDetailComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    BuildingDetailComponent.prototype.close = function () {
        this.router.navigate(['/']);
        //this.location.back();
    };
    BuildingDetailComponent.prototype.GetUnits = function () {
        var _this = this;
        this.unitsService.GetUnits().then(function (unit) { return _this.units = unit; });
        this.unitsService.GetUnitActions(1).then(function (actions) { return _this.droneActions = actions; });
    };
    BuildingDetailComponent.prototype.ActionClick = function (action) {
        switch (action.ClickEvent) {
            case "CreateDrone":
                // need a count of all drones to calculate costs
                var droneCount = this.units.filter(function (u) { return u.TypeId == 1; }).length;
                // see if there are enough minerals first
                if (this.base.Minerals >= action.MineralCost) {
                    // confirm we have enough overlords for new drones
                    var overlordCount = this.units.filter(function (u) { return u.TypeId == 2; }).length;
                    var otherUnitsCount = this.units.filter(function (u) { return u.TypeId != 2; }).length;
                    if (overlordCount * 8 > otherUnitsCount) {
                        this.base.Minerals -= action.MineralCost;
                        // increment id value for drones
                        var curDroneId = 0;
                        if (droneCount > 0) {
                            curDroneId = this.units.filter(function (u) { return u.TypeId == 1; })[droneCount - 1].Id;
                        }
                        curDroneId++;
                        // create new drone with the new id
                        var dActions = new Array();
                        dActions = this.droneActions.slice(0);
                        var drone = new units_1.Drone(curDroneId, dActions);
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
                var overlordCount = this.units.filter(function (u) { return u.TypeId == 2; }).length;
                if (this.base.Minerals >= action.MineralCost) {
                    this.base.Minerals -= action.MineralCost;
                    // increment id value for overlords
                    var curOverlordId = 0;
                    if (overlordCount > 0) {
                        var curOverlordId = this.units.filter(function (u) { return u.TypeId == 2; })[overlordCount - 1].Id;
                    }
                    curOverlordId++;
                    // create new overlord with the new id
                    var overlord = new units_1.Overlord(curOverlordId);
                    this.units.push(overlord);
                    action.MineralCost += Math.ceil(action.MineralCost * 1.3);
                }
                else {
                    alert("We require more Minerals!");
                }
        }
    };
    return BuildingDetailComponent;
}());
BuildingDetailComponent = __decorate([
    core_1.Component({
        selector: 'building-detail',
        templateUrl: './html/building-detail.component.html',
        providers: [buildings_service_1.BuildingsService, base_service_1.BaseService, units_service_1.UnitsService]
    }),
    __metadata("design:paramtypes", [buildings_service_1.BuildingsService, base_service_1.BaseService,
        units_service_1.UnitsService, router_1.ActivatedRoute, common_1.Location,
        router_2.Router])
], BuildingDetailComponent);
exports.BuildingDetailComponent = BuildingDetailComponent;
//# sourceMappingURL=building-detail.component.js.map