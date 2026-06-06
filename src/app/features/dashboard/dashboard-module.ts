import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { SharedModule } from '../../shared/shared-module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [Dashboard],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, NgApexchartsModule],
})
export class DashboardModule { }
