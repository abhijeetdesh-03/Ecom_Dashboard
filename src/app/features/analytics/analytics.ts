import { Component } from '@angular/core';
import { analyticsCards } from '../../shared/data/analytics';
import { SharedCards } from '../../shared/models/shared-cards';

@Component({
  selector: 'app-analytics',
  standalone: false,
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
})
export class Analytics {
  analytics: SharedCards[] = analyticsCards;
}
