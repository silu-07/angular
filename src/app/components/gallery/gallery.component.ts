import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoService, Photo } from '../../services/photo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  photos: Photo[] = [];
  filtered: Photo[] = [];
  search = '';
  selectedTag = '';
  showModal = false;
  selected?: Photo;

  constructor(private service: PhotoService) {
    this.photos = this.service.getPhotos();
    this.applyFilter();
  }

  applyFilter() {
    const q = this.search.trim().toLowerCase();
    this.filtered = this.photos.filter(p => {
      const matchesSearch = q === '' || p.title.toLowerCase().includes(q) || (p.tags || []).some(t => t.includes(q));
      const matchesTag = this.selectedTag === '' || (p.tags || []).includes(this.selectedTag);
      return matchesSearch && matchesTag;
    });
  }

  open(photo: Photo) {
    this.selected = photo;
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.selected = undefined;
  }

  uniqueTags(): string[] {
    const s = new Set<string>();
    this.photos.forEach(p => p.tags.forEach(t => s.add(t)));
    return Array.from(s);
  }
}
