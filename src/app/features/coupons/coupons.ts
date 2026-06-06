import { Component } from '@angular/core';
import { couponCards } from '../../shared/data/coupon';
import { SharedCards } from '../../shared/models/shared-cards';

@Component({
  selector: 'app-coupons',
  standalone: false,
  templateUrl: './coupons.html',
  styleUrl: './coupons.scss',
})
export class Coupons {
  coupons: SharedCards[] = couponCards;
}
