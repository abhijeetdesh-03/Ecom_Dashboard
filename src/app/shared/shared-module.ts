import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Card } from './components/card/card';
import { Loader } from './components/loader/loader';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Table } from './components/table/table';

@NgModule({
  declarations: [Card, Loader, Sidebar, Header, Table],
  imports: [CommonModule, RouterModule],
  exports: [Card, Loader, Sidebar, Header, RouterModule, Table],
})
export class SharedModule { }
