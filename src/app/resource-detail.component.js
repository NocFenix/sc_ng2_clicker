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
var ResourceDetailComponent = (function () {
    function ResourceDetailComponent(resourcesService, baseService, unitsService, route, location, router) {
        this.resourcesService = resourcesService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ResourceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.resourcesService.GetGeyser(+params['id']); })
            .subscribe(function (g) { return _this.geyser = g; });
        this.GetBase();
        this.GetUnits();
    };
    ResourceDetailComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    ResourceDetailComponent.prototype.close = function () {
        this.router.navigate(['/']);
        //this.location.back();
    };
    ResourceDetailComponent.prototype.GetUnits = function () {
        var _this = this;
        this.unitsService.GetUnits().then(function (unit) { return _this.units = unit; });
    };
    ResourceDetailComponent.prototype.ActionClick = function (action) {
        switch (action.ClickEvent) {
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
    };
    return ResourceDetailComponent;
}());
ResourceDetailComponent = __decorate([
    core_1.Component({
        selector: 'resource-detail',
        templateUrl: './html/resource-detail.component.html',
        providers: [resource_service_1.ResourceService, base_service_1.BaseService, units_service_1.UnitsService]
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService, base_service_1.BaseService,
        units_service_1.UnitsService, router_1.ActivatedRoute, common_1.Location,
        router_2.Router])
], ResourceDetailComponent);
exports.ResourceDetailComponent = ResourceDetailComponent;
//# sourceMappingURL=resource-detail.component.js.map