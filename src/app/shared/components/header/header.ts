import { Component } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private themeService: ThemeService) {}

  get isDark(): boolean {
    return this.themeService.isDark();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
