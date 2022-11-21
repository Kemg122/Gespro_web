import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditGpProjectRoutingModule} from './edit-gp-project-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EditGpProjectComponent} from './edit-gp-project.component';


@NgModule({
  declarations: [EditGpProjectComponent],
  imports: [
    CommonModule,
    EditGpProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditGpProjectModule {
}