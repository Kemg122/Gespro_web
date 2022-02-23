import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AdminComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
