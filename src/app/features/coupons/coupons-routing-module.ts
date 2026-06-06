import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Coupons } from './coupons';

const routes: Routes = [
  { path: '', component: Coupons }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponsRoutingModule { }
