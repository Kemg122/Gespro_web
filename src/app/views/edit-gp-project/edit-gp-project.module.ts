import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditGpProjectRoutingModule} from './edit-gp-project-routing.module';
import {EditGpProjectComponent} from './edit-gp-project.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EditGpProjectComponent
  ],
  imports: [
    CommonModule,
    EditGpProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditGpProjectModule {
}
