import { Base } from './classes/base'
import { Building, BuildingAction } from './classes/buildings';
import { IUnit, UnitAction } from './classes/units';
import { Mineral, Vespene, ResourceAction } from './classes/resources'

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
        MineralCost: 100,
        VespeneCost: 0,
        ClickEvent: "CreateDrone"
    },
    {
        Name: "Spawn Overlord",
        Description: "Spawns a new Overlord which allows for more Units and increases your Minerals per click.",
        MineralCost: 100,
        VespeneCost: 0,
        ClickEvent: "CreateOverlord"
    },
    {
        Name: "Evolve into Lair",
        Description: "Evolves the Hatchery into a Lair.<br/>&ensp;Prerequisites:<br/>&emsp; Spawning Pool",
        MineralCost: 500,
        VespeneCost: 250,
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

export const VESPENEActions: ResourceAction[] = [
    {
        Name: "Build Extractor",
        Description: "Builds an Extractor on the Vespene Geyser to enable increased Vespene Gas output.",
        MineralCost: 100,
        VespeneCost: 0,
        ClickEvent: "BuildExtractor"
    }
]

export const MINERAL_FIELDS: Mineral[] = [
    { Id: 1, Name: "Mineral Field"}
]

export const VESPENE_GEYSERS: Vespene[] = [
    { Id: 2, Name: "Vespene Geyser", HasBuilding: false, BuildingLevel: 0, CssClass: "divVespeneGeyser", Actions: VESPENEActions }
]

export const DRONEActions: UnitAction[] = [
    {
        Name: "Gather Minerals",
        Description: "Sets the Drone to gathering Minerals.",
        MineralCost: 0,
        VespeneCost: 0,
        ButtonLabel: "Gather",
        ClickEvent: "GatherMinerals"
    },
    {
        Name: "Gather Vespene",
        Description: "Sets the Drone to gathering Vespene Gas.",
        MineralCost: 0,
        VespeneCost: 0,
        ButtonLabel: "Gather",
        ClickEvent: "GatherVespene"
    }
]