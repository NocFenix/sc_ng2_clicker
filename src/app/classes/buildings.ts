export class Building {
    Id: number;
    Name: string;
    Description: string;
    MineralCost: number;
    VespeneCost: number;
    CreditCost: number;
    TimeToBuild: number;
    RushCost: number;
    ClickEvent: string;
    Class: string;
    Actions: BuildingAction[];
}

export class BuildingAction {
    Name: string;
    Description: string;
    MineralCost: number;
    VespeneCost: number;
    ClickEvent: string;
}