import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isPlaying = false;
  isDarkMode = true;

  playlist = [
    {
      title: 'Jaa Bewafa Jaa',
      artist: ' Altaf Raja',
      url: '/music/Ja Bewafa Ja Tuje Pyar Nahi Karna.mp3',
    },
    {
      title: 'Pehle To Kabhi Kabhi Gham Tha',
      artist: ' Altaf Raja',
      url: '/music/Pehle To Kabhi Kabhi Gham Tha.mp3',
    },
  ];

  currentIndex = 0;
  private audio = new Audio();

  constructor() {
    this.audio.volume = 0.55;
    this.audio.src = this.playlist[this.currentIndex].url;
  }

  get currentTrack() {
    return this.playlist[this.currentIndex];
  }

  private playCurrentTrack(): void {
    this.audio.src = this.playlist[this.currentIndex].url;
    this.audio.load();
    this.audio.play().catch(() => {
      this.isPlaying = false;
    });
    this.isPlaying = true;
  }

  toggleMusic(): void {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      return;
    }

    if (this.audio.src) {
      this.audio.play().catch(() => {
        this.isPlaying = false;
      });
      this.isPlaying = true;
    } else {
      this.playCurrentTrack();
    }
  }

  prevTrack(): void {
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.playCurrentTrack();
  }

  nextTrack(): void {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.playCurrentTrack();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
