import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss'],
  imports: [GalleryComponent, CommonModule]
})
export class AppComponent {
  dark = false;

  ngOnInit(): void {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') this.dark = true;
      else if (saved === 'light') this.dark = false;
      else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) this.dark = true;
    } catch (e) {
      // ignore localStorage errors
    }
    this.applyTheme();
  }

  toggleDark() {
    this.dark = !this.dark;
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement;
    if (this.dark) {
      root.classList.add('dark');
      root.classList.add('dark-mode');
      try { localStorage.setItem('theme', 'dark'); } catch { }
    } else {
      root.classList.remove('dark');
      root.classList.remove('dark-mode');
      try { localStorage.setItem('theme', 'light'); } catch { }
    }
  }

}
