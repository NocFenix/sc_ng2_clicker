export interface IUnit {
    Id: number;
    TypeId: number;
    Name: string;
    Description: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;
    Actions: UnitAction[];
}

export class Drone implements IUnit {
    Id: number;
    TypeId: number;
    Name: string;
    Description: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;
    Actions: UnitAction[];

    constructor (id: number, actions: UnitAction[]) {
        this.Id = id;
        this.TypeId = 1;
        this.Name = "Drone";
        this.Description = "Drones can assist in the collection of resources or can be evolved into additional buildings.";
        this.CssClass = "divDrone";
        this.Actions = actions;
    }
}

export class Overlord implements IUnit {
    Id: number;
    TypeId: number;
    Name: string;
    Description: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;
    Actions: UnitAction[];

    constructor (id: number) {
        this.Id = id;
        this.TypeId = 2;
        this.Name = "Overlord";
        this.Description = "Overlords allow you to have additional underlings.<br /><br />They also increase your Minerals per click by providing additional insight into where and how to harvest.";
        this.CssClass = "divOverlord";
        this.Actions = null;
    }    
}

export class UnitAction {
    Name: string;
    Id: number;
    UnitId: number;
    Description: string;
    ButtonLabel: string;
    MineralCost: number;
    VespeneCost: number;
    ClickEvent: string;
}