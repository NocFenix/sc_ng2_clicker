import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './navbar.component';
import { ResourceComponent } from './resources.component';
import { ResourceDetailComponent } from './resource-detail.component'
import { BuildingsComponent } from './buildings.component';
import { BuildingDetailComponent } from './building-detail.component'
import { UnitsComponent } from './units.component';
import { UnitDetailComponent } from './unit-details.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, NavBarComponent, ResourceComponent, BuildingsComponent,
    UnitsComponent, BuildingDetailComponent, ResourceDetailComponent, UnitDetailComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
