"use strict";
exports.BASE = {
    Id: 1,
    Name: "Main Base",
    Level: 1,
    Minerals: 100,
    Vespene: 0,
    Credits: 0
};
exports.BUILDINGS = [
    {
        Id: 1,
        Name: "Hatchery",
        MineralCost: 300,
        VespeneCost: 0,
        CreditCost: 0,
        TimeToBuild: 180,
        RushCost: 3,
        Class: "divHatchery",
        ClickEvent: "hatchery.click();"
    }
];
exports.UNITS = [];
exports.MINERAL_FIELDS = [
    { Id: 1, Name: "Field_1" }
];
exports.VESPENE_GEYSERS = [
    { Id: 1, Name: "Geyser_1", HasBuilding: false, CssClass: "divVespeneGeyser" }
];
//# sourceMappingURL=mock-base.js.map