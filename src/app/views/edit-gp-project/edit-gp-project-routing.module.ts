import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditGpProjectComponent} from './edit-gp-project.component';

const routes: Routes = [
  {path: '', component: EditGpProjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditGpProjectRoutingModule {
}
