import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GpProjectRoutingModule} from './gp-project-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {GpProjectComponent} from './gp-project.component';


@NgModule({
  declarations: [GpProjectComponent],
  imports: [
    CommonModule,
    GpProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class GpProjectModule {
}
