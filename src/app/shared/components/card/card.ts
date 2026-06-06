import { Component, Input } from '@angular/core';
import { SharedCards } from '../../models/shared-cards';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() card!: SharedCards;
}
