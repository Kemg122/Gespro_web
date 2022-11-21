import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {GpAddressesModule} from '../views/gp-addresses/gp-addresses.module';
import {EditGpAddressModule} from '../views/edit-gp-address/edit-gp-address.module';
import {EditGpOrganisationModule} from '../views/edit-gp-organisation/edit-gp-organisation.module';
import {GpOrganisationsModule} from '../views/gp-organisations/gp-organisations.module';
import {EditGpEmployeeModule} from '../views/edit-gp-employee/edit-gp-employee.module';
import {HomeModule} from '../views/home/home.module';
import {ToastrModule} from 'ngx-toastr';
import { EditGpProjectManagerModule } from '../views/edit-gp-project-manager/edit-gp-project-manager.module';
import { GpProjectModule } from '../views/gp-project/gp-project.module';
import { EditGpProjectModule } from '../views/edit-gp-project/edit-gp-project.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    GpAddressesModule,
    EditGpAddressModule,
    EditGpOrganisationModule,
    GpOrganisationsModule,
    EditGpEmployeeModule,
    EditGpProjectManagerModule,
    GpProjectModule,
    EditGpProjectModule,
    HomeModule,
    ToastrModule.forRoot(),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}