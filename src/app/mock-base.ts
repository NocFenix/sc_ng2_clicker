import { Base } from './classes/base'
import { Building, BuildingAction } from './classes/buildings';
import { IUnit } from './classes/units';
import { Mineral, Vespene } from './classes/resources'

export const BASE: Base = {
    Id: 1,
    Name: "Main Base",
    Level: 1,
    Minerals: 100,
    Vespene: 0,
    Credits: 0
}

export const HIVEActions: BuildingAction[] = [
    {
        Name: "Spawn Drone",
        Description: "Spawns a new Drone which can assist in the collection of Minerals and Vespene.<br/>Drones are also used to evolve more Zerg buildings.",
        Cost: "100 Minerals",
        ClickEvent: "CreateDrone"
    },
    {
        Name: "Spawn Overlord",
        Description: "Spawns a new Overlord which allows for more Units.",
        Cost: "100 Minerals",
        ClickEvent: "CreateOverlord"
    },
    {
        Name: "Evolve into Lair",
        Description: "Evolves the Hatchery into a Lair.<br/>&ensp;Prerequisites:<br/>&emsp; Spawning Pool",
        Cost: "500 Minerals and 250 Vespene Gas",
        ClickEvent: "EvolveLair"
    }
];

export const BUILDINGS: Building[] = [
    {
        Id: 1,
        Name: "Hatchery",
        Description: "The Hatchery is the main building from which the Zerg begin. You can create Drones and Overlords from here. Evolves into the Lair.",
        MineralCost: 300,
        VespeneCost: 0,
        CreditCost: 0,
        TimeToBuild: 180,
        RushCost: 3,
        Class: "divHatchery",
        ClickEvent: "hatchery.click();",
        Actions: HIVEActions
    }
];

export const UNITS: IUnit[] = []

export const MINERAL_FIELDS: Mineral[] = [
    { Id: 1, Name: "Field_1"}
]

export const VESPENE_GEYSERS: Vespene[] = [
    { Id: 2, Name: "Geyser_1", HasBuilding: false, CssClass: "divVespeneGeyser" }
]