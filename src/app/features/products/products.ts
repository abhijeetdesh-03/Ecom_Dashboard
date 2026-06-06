import { Component } from '@angular/core';
import { SharedCards } from '../../shared/models/shared-cards';
import { productStats } from '../../shared/data/product';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products: SharedCards[] = productStats;
}
