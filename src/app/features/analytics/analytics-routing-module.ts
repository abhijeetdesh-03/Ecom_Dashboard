import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Analytics } from './analytics';

const routes: Routes = [
  { path: '', component: Analytics }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule { }
