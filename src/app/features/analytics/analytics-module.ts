import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing-module';
import { Analytics } from './analytics';
import { SharedModule } from "../../shared/shared-module";
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [Analytics],
  imports: [CommonModule, AnalyticsRoutingModule, SharedModule, NgApexchartsModule],
})
export class AnalyticsModule { }
