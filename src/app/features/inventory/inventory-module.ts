import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing-module';
import { Inventory } from './inventory';

@NgModule({
  declarations: [Inventory],
  imports: [CommonModule, InventoryRoutingModule],
})
export class InventoryModule {}
