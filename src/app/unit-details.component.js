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
require("rxjs/add/operator/switchMap");
var ResourceDetailComponent = (function () {
    function ResourceDetailComponent(resourcesService, baseService, unitsService, route, location) {
        this.resourcesService = resourcesService;
        this.baseService = baseService;
        this.unitsService = unitsService;
        this.route = route;
        this.location = location;
    }
    ResourceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.unitsService.GetUnit(+params['typeId'], +params['id']); })
            .subscribe(function (u) { return _this.unit = u; });
        this.GetBase();
    };
    ResourceDetailComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    ResourceDetailComponent.prototype.close = function () {
        this.location.back();
    };
    ResourceDetailComponent.prototype.ActionClick = function () {
        return false;
    };
    return ResourceDetailComponent;
}());
ResourceDetailComponent = __decorate([
    core_1.Component({
        selector: 'unit-details',
        templateUrl: './html/unit-details.component.html',
        providers: [resource_service_1.ResourceService, base_service_1.BaseService, units_service_1.UnitsService]
    }),
    __metadata("design:paramtypes", [resource_service_1.ResourceService, base_service_1.BaseService,
        units_service_1.UnitsService, router_1.ActivatedRoute, common_1.Location])
], ResourceDetailComponent);
exports.ResourceDetailComponent = ResourceDetailComponent;
//# sourceMappingURL=unit-details.component.js.map