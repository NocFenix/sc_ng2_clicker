"use strict";
var Drone = (function () {
    function Drone(id) {
        this.Id = id;
        this.TypeId = 1;
        this.Name = "Drone";
        this.CssClass = "divDrone";
        this.GatherResource = 1;
    }
    return Drone;
}());
exports.Drone = Drone;
var Overlord = (function () {
    function Overlord(id) {
        this.Id = id;
        this.TypeId = 2;
        this.Name = "Overlord";
        this.CssClass = "divOverlord";
    }
    return Overlord;
}());
exports.Overlord = Overlord;
//# sourceMappingURL=units.js.map