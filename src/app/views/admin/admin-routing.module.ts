import {AdminComponent} from './admin.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'addresses',
        loadChildren: () =>
          import('../gp-addresses/gp-addresses.module').then(
            (m) => m.GpAddressesModule
          ),
      },
      {
        path: 'organisations',
        loadChildren: () =>
          import('../gp-organisations/gp-organisations.module').then(
            (m) => m.GpOrganisationsModule
          ),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('../gp-employees/gp-employees.module').then(
            (m) => m.GpEmployeesModule
          ),
      },
      {
        path: 'projectManagers',
        loadChildren: () =>
          import('../gp-project-managers/gp-project-managers.module').then(
            (m) => m.GpProjectManagersModule
            ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('../gp-project/gp-project.module').then(
            (m) => m.GpProjectModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}