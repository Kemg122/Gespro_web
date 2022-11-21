import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GpProjectManagersComponent} from './gp-project-managers.component';

const routes: Routes = [


  {path: '', component: GpProjectManagersComponent,},
  {
    path: 'nouveau', loadChildren: () => import('../edit-gp-project-manager/edit-gp-project-manager-routing.module').then(
      (m) => m.EditGpProjectManagerRoutingModule
    ),
  },
  {
    path: ':id', loadChildren: () => import('../edit-gp-project-manager/edit-gp-project-manager-routing.module').then(
      (m) => m.EditGpProjectManagerRoutingModule
    ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpProjectManagersRoutingModule {
}
