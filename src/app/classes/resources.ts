export class Mineral {
    Id: number;
    Name: string;
}

export class Vespene {
    Id: number;
    Name: string;
    HasBuilding: boolean;
    CssClass: string;
    BuildingLevel: number;
    Actions: ResourceAction[];
}

export class ResourceAction {
    Name: string;
    Description: string;
    MineralCost: number;
    VespeneCost: number;
    ClickEvent: string;
}