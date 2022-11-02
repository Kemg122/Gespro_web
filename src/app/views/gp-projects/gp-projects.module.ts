import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GpProjectsRoutingModule} from './gp-projects-routing.module';
import {GpProjectsComponent} from './gp-projects.component';


@NgModule({
  declarations: [
    GpProjectsComponent
  ],
  exports: [
    GpProjectsComponent
  ],
  imports: [
    CommonModule,
    GpProjectsRoutingModule
  ]
})
export class GpProjectsModule {
}
