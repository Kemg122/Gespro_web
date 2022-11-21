import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditGpProjectManagerComponent} from './edit-gp-project-manager.component';

const routes: Routes = [
  {path: "", component: EditGpProjectManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditGpProjectManagerRoutingModule {
}
