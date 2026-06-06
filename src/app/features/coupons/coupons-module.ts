import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing-module';
import { Coupons } from './coupons';
import { SharedModule } from "../../shared/shared-module";

@NgModule({
  declarations: [Coupons],
  imports: [CommonModule, CouponsRoutingModule, SharedModule],
})
export class CouponsModule { }
