import { Component } from '@angular/core';
import { reviewCards } from '../../shared/data/review';
import { SharedCards } from '../../shared/models/shared-cards';

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  review: SharedCards[] = reviewCards;
}
