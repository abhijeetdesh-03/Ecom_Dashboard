import { Component } from '@angular/core';
import { ORDERS_TABLE } from '../../shared/data/orders';
import { ORDER_SUMMARY_CARDS } from '../../shared/data/order_summary';
import { SharedCards } from '../../shared/models/shared-cards';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  summaryCards: SharedCards[] = ORDER_SUMMARY_CARDS;


  orderColumns = ORDERS_TABLE.columns;

  orderData = ORDERS_TABLE.data;

  actions = [
    {
      icon: 'ri-eye-line',
      action: 'view'
    },
    {
      icon: 'ri-edit-line',
      action: 'edit'
    },
    {
      icon: 'ri-printer-line',
      action: 'print'
    },
    {
      icon: 'ri-file-list-line',
      action: 'invoice'
    }
  ];

  filterOptions = [
    'All',
    'Delivered',
    'Shipped',
    'Processing',
    'Pending',
    'Cancelled'
  ];

}
