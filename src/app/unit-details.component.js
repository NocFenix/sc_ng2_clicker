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
var units_service_1 = require("./units.service");
var resource_service_1 = require("./resource.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var UnitDetailComponent = (function () {
    function UnitDetailComponent(resourcesService, baseService, unitsService, route, location, router) {
        this.resourcesService = resourcesService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    UnitDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.unitsService.GetUnit(+params['typeId'], +params['id']); })
            .subscribe(function (u) { return _this.unit = u; });
        this.GetBase();
    };
    UnitDetailComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    UnitDetailComponent.prototype.close = function () {
        this.router.navigate(['/']);
        //this.location.back();
    };
    UnitDetailComponent.prototype.ActionClick = function (action) {
        switch (action.ClickEvent) {
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
    };
    UnitDetailComponent.prototype.GatherMinerals = function () {
        this.base.Minerals++;
    };
    UnitDetailComponent.prototype.GatherVespene = function () {
        this.base.Vespene++;
    };
    return UnitDetailComponent;
}());
UnitDetailComponent = __decorate([
    core_1.Component({
        selector: 'unit-details',
        templateUrl: './html/unit-details.component.html',
        providers: [resource_service_1.ResourceService, base_service_1.BaseService, units_service_1.UnitsService]
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService, base_service_1.BaseService,
        units_service_1.UnitsService, router_1.ActivatedRoute, common_1.Location,
        router_2.Router])
], UnitDetailComponent);
exports.UnitDetailComponent = UnitDetailComponent;
//# sourceMappingURL=unit-details.component.js.map