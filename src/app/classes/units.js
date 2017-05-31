"use strict";
var Drone = (function () {
    function Drone(id, actions) {
        this.Id = id;
        this.TypeId = 1;
        this.Name = "Drone";
        this.Description = "Drones can assist in the collection of resources or can be evolved into additional buildings.";
        this.CssClass = "divDrone";
        this.Actions = actions;
    }
    return Drone;
}());
exports.Drone = Drone;
var Overlord = (function () {
    function Overlord(id) {
        this.Id = id;
        this.TypeId = 2;
        this.Name = "Overlord";
        this.Description = "Overlords allow you to have additional underlings.<br /><br />They also increase your Minerals per click by providing additional insight into where and how to harvest.";
        this.CssClass = "divOverlord";
        this.Actions = null;
    }
    return Overlord;
}());
exports.Overlord = Overlord;
var UnitAction = (function () {
    function UnitAction() {
    }
    return UnitAction;
}());
exports.UnitAction = UnitAction;
//# sourceMappingURL=units.js.map