import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GpProjectsComponent} from "./gp-projects.component";

const routes: Routes = [
  {path: '', component: GpProjectsComponent,},
  {
    path: 'nouveau', loadChildren: () => import('../edit-gp-project/edit-gp-project.module').then(
      (m) => m.EditGpProjectModule
    ),
  },
  {
    path: ':id', loadChildren: () => import('../edit-gp-project/edit-gp-project.module').then(
      (m) => m.EditGpProjectModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpProjectsRoutingModule {
}
