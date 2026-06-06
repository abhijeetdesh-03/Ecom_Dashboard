import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reviews } from './reviews';

const routes: Routes = [
  { path: '', component: Reviews }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule { }
