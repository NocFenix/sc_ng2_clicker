import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './navbar.component';
import { ResourceComponent } from './resources.component';
import { BuildingsComponent } from './buildings.component';
import { UnitsComponent } from './units.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavBarComponent, ResourceComponent, BuildingsComponent, UnitsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
