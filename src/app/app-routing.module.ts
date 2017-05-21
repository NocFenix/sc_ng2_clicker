import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingsComponent } from './buildings.component';
import { ResourceComponent } from './resources.component'
import { BuildingDetailComponent } from './building-detail.component';
import { ResourceDetailComponent } from './resource-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'building-detail/:id', component: BuildingDetailComponent },
  { path: 'resource-detail/:id', component: ResourceDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}