export interface IUnit {
    Id: number;
    TypeId: number;
    Name: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;
    GatherResource?: number;
}

export class Drone implements IUnit {
    Id: number;
    TypeId: number;
    Name: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;
    GatherResource: number;

    constructor (id: number) {
        this.Id = id;
        this.TypeId = 1;
        this.Name = "Drone";
        this.CssClass = "divDrone";
        this.GatherResource = 1;
    }
}

export class Overlord implements IUnit {
    Id: number;
    TypeId: number;
    Name: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;
    GatherResource?: number;

    constructor (id: number) {
        this.Id = id;
        this.TypeId = 2;
        this.Name = "Overlord";
        this.CssClass = "divOverlord";
    }    
}