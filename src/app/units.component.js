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
var router_1 = require("@angular/router");
var UnitsComponent = (function () {
    function UnitsComponent(unitsService, baseService, router) {
        this.unitsService = unitsService;
        this.baseService = baseService;
        this.router = router;
    }
    UnitsComponent.prototype.ngOnInit = function () {
        this.GetBase();
        this.GetUnits();
    };
    UnitsComponent.prototype.GetBase = function () {
        var _this = this;
        this.baseService.GetBase().then(function (base) { return _this.base = base; });
    };
    UnitsComponent.prototype.GetUnits = function () {
        var _this = this;
        this.unitsService.GetUnits().then(function (unit) { return _this.units = unit; });
    };
    UnitsComponent.prototype.UnitClick = function (unit) {
        this.router.navigate(['/unit-details', unit.TypeId, unit.Id]);
    };
    return UnitsComponent;
}());
UnitsComponent = __decorate([
    core_1.Component({
        selector: 'my-units',
        templateUrl: './html/units.component.html',
        providers: [units_service_1.UnitsService, base_service_1.BaseService]
    }),
    __metadata("design:paramtypes", [units_service_1.UnitsService, base_service_1.BaseService, router_1.Router])
], UnitsComponent);
exports.UnitsComponent = UnitsComponent;
//# sourceMappingURL=units.component.js.map