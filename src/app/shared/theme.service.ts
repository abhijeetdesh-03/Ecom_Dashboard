import { Injectable, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isBrowser: boolean;
  public isDark = signal<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDark.set(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia && typeof window.matchMedia === 'function'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
          : false;
        this.isDark.set(prefersDark);
      }
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDark.set(!this.isDark());
    if (this.isBrowser) {
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (this.isBrowser) {
      if (this.isDark()) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-theme');
      }
    }
  }
}
