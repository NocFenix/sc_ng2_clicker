export class Unit {
    Id: number;
    Name: string;
    CssClass: string;
    MineralCost?: number;
    VespeneCost?: number;
    CreditCost?: number;
    TimeToBuild?: number;
    RushCost?: number;

    constructor(id: number, name: string, cssClass: string) {
        this.Id = id;
        this.Name = name;
        this.CssClass = cssClass;
    }
}