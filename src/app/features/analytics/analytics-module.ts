import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing-module';
import { Analytics } from './analytics';
import { SharedModule } from "../../shared/shared-module";

@NgModule({
  declarations: [Analytics],
  imports: [CommonModule, AnalyticsRoutingModule, SharedModule],
})
export class AnalyticsModule { }
