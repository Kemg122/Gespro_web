import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'; 

import {GpProjectManagersRoutingModule} from './gp-project-managers-routing.module';
import {GpProjectManagersComponent} from './gp-project-managers.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GpProjectModule } from '../gp-project/gp-project.module';


@NgModule({
  declarations: [GpProjectManagersComponent],
  imports: [
    CommonModule,
    GpProjectManagersRoutingModule,
    GpProjectModule,
    ReactiveFormsModule
  ]
})
export class GpProjectManagersModule {
}
