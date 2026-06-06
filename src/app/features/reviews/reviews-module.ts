import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing-module';
import { Reviews } from './reviews';
import { SharedModule } from "../../shared/shared-module";

@NgModule({
  declarations: [Reviews],
  imports: [CommonModule, ReviewsRoutingModule, SharedModule],
})
export class ReviewsModule { }
