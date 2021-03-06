"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar.component");
var resources_component_1 = require("./resources.component");
var resource_detail_component_1 = require("./resource-detail.component");
var buildings_component_1 = require("./buildings.component");
var building_detail_component_1 = require("./building-detail.component");
var units_component_1 = require("./units.component");
var unit_details_component_1 = require("./unit-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, resources_component_1.ResourceComponent, buildings_component_1.BuildingsComponent,
            units_component_1.UnitsComponent, building_detail_component_1.BuildingDetailComponent, resource_detail_component_1.ResourceDetailComponent, unit_details_component_1.UnitDetailComponent],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map