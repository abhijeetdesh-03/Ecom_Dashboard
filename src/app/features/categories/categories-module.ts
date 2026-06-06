import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing-module';
import { Categories } from './categories';

@NgModule({
  declarations: [Categories],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
