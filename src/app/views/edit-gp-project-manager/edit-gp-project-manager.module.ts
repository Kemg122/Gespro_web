import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditGpProjectManagerRoutingModule} from './edit-gp-project-manager-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {EditGpProjectManagerComponent} from './edit-gp-project-manager.component';

@NgModule({
    declarations: [
      EditGpProjectManagerComponent
    ],
    imports: [
      CommonModule,
      EditGpProjectManagerRoutingModule,
      ReactiveFormsModule
    ]
  })
  export class EditGpProjectManagerModule {
  }