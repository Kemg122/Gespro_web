import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditGpAddressRoutingModule} from './edit-gp-address-routing.module';
import {EditGpAddressComponent} from './edit-gp-address.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [EditGpAddressComponent],
  imports: [
    CommonModule,
    EditGpAddressRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class EditGpAddressModule {
}
