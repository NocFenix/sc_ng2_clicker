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
var ResourceComponent = (function () {
    function ResourceComponent(resourceService, baseService, unitsService, router) {
        this.resourceService = resourceService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.router = router;
    }
    ResourceComponent.prototype.ngOnInit = function () {
        this.GetMineralFields();
        this.GetVespeneGeysers();
        this.GetBase();
        this.GetUnits();
    };
    ResourceComponent.prototype.GetMineralFields = function () {
        var _this = this;
        this.resourceService.GetMineralFields().then(function (minerals) { return _this.mineralFields = minerals; });
    };
    ResourceComponent.prototype.GetVespeneGeysers = function () {
        var _this = this;
        this.resourceService.GetVespeneGeysers().then(function (vespene) { return _this.vespeneGeysers = vespene; });
    };
    ResourceComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    ResourceComponent.prototype.GetUnits = function () {
        var _this = this;
        this.unitsService.GetUnits().then(function (unit) { return _this.units = unit; });
    };
    ResourceComponent.prototype.mineralClick = function () {
        var overlordCount = this.units.filter(function (d) { return d.TypeId == 2; }).length;
        this.base.Minerals += (1 + (overlordCount * 4));
    };
    ResourceComponent.prototype.vespeneClick = function (geyser) {
        this.router.navigate(['/resource-detail', geyser.Id]);
        this.base.Vespene += (1 + (geyser.BuildingLevel * 4));
    };
    ResourceComponent.prototype.vespeneRightClick = function (geyser) {
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
    };
    return ResourceComponent;
}());
ResourceComponent = __decorate([
    core_1.Component({
        selector: 'resources',
        templateUrl: './html/resources.component.html',
        providers: [resource_service_1.ResourceService, base_service_1.BaseService, units_service_1.UnitsService]
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService, base_service_1.BaseService,
        units_service_1.UnitsService, router_1.Router])
], ResourceComponent);
exports.ResourceComponent = ResourceComponent;
//# sourceMappingURL=resources.component.js.map