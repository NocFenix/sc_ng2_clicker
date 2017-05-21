"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_base_1 = require("./mock-base");
var ResourceService = (function () {
    function ResourceService() {
    }
    ResourceService.prototype.GetMineralFields = function () {
        return Promise.resolve(mock_base_1.MINERAL_FIELDS);
    };
    ResourceService.prototype.GetVespeneGeysers = function () {
        return Promise.resolve(mock_base_1.VESPENE_GEYSERS);
    };
    ResourceService.prototype.GetMinerals = function () {
        return Promise.resolve(mock_base_1.BASE.Minerals);
    };
    ResourceService.prototype.GetVespene = function () {
        return Promise.resolve(mock_base_1.BASE.Vespene);
    };
    ResourceService.prototype.GetCredits = function () {
        return Promise.resolve(mock_base_1.BASE.Credits);
    };
    ResourceService.prototype.GetLevel = function () {
        return Promise.resolve(mock_base_1.BASE.Level);
    };
    ResourceService.prototype.GetGeyser = function (id) {
        return this.GetVespeneGeysers().then(function (geyser) { return geyser.find(function (g) { return g.Id === id; }); });
    };
    return ResourceService;
}());
ResourceService = __decorate([
    core_1.Injectable()
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map