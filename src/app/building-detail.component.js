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
require("rxjs/add/operator/switchMap");
var BuildingDetailComponent = (function () {
    function BuildingDetailComponent(buildingsService, baseService, unitsService, route, location) {
        this.buildingsService = buildingsService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.route = route;
        this.location = location;
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
        this.location.back();
    };
    BuildingDetailComponent.prototype.GetUnits = function () {
        var _this = this;
        this.unitsService.GetUnits().then(function (unit) { return _this.units = unit; });
    };
    BuildingDetailComponent.prototype.ActionClick = function (action) {
        switch (action.ClickEvent) {
            case "CreateDrone":
                if (this.base.Minerals >= 100) {
                    this.base.Minerals -= 100;
                    this.units.push(new units_1.Drone(1));
                }
                else {
                    alert("Not enough Minerals!");
                }
                break;
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
        units_service_1.UnitsService, router_1.ActivatedRoute, common_1.Location])
], BuildingDetailComponent);
exports.BuildingDetailComponent = BuildingDetailComponent;
//# sourceMappingURL=building-detail.component.js.map