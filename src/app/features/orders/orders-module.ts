import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing-module';
import { Orders } from './orders';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [Orders],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}

