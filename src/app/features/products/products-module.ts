import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { Products } from './products';
import { SharedModule } from "../../shared/shared-module";

@NgModule({
  declarations: [Products],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule { }
