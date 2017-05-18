import { Base } from './classes/base'
import { Building } from './classes/buildings';
import { Unit } from './classes/units';
import { Mineral, Vespene } from './classes/resources'

export const BASE: Base = {
    Id: 1,
    Name: "Main Base",
    Level: 1,
    Minerals: 100,
    Vespene: 0,
    Credits: 0
}

export const BUILDINGS: Building[] = [
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

export const UNITS: Unit[] = []

export const MINERAL_FIELDS: Mineral[] = [
    { Id: 1, Name: "Field_1"}
]

export const VESPENE_GEYSERS: Vespene[] = [
    { Id: 1, Name: "Geyser_1", HasBuilding: false, CssClass: "divVespeneGeyser" }
]