"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_base_1 = require("./mock-base");
var UnitsService = (function () {
    function UnitsService() {
    }
    UnitsService.prototype.GetUnits = function () {
        return Promise.resolve(mock_base_1.UNITS);
    };
    UnitsService.prototype.GetUnit = function (typeId, id) {
        return this.GetUnits().then(function (units) { return units.filter(function (u) { return u.TypeId == typeId; }).find(function (u) { return u.Id == id; }); });
    };
    return UnitsService;
}());
UnitsService = __decorate([
    core_1.Injectable()
], UnitsService);
exports.UnitsService = UnitsService;
//# sourceMappingURL=units.service.js.map