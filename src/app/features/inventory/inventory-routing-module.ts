import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inventory } from './inventory';

const routes: Routes = [
  { path: '', component: Inventory }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule { }
