import { Injectable } from '@angular/core';

export interface Photo {
  id: number;
  title: string;
  src: string;
  tags: string[];
  location?: string;
}

const PHOTOS: Photo[] = [
  { id: 1, title: 'Mountain Sunrise', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop', tags: ['nature', 'mountain'], location: 'Alps' },
  { id: 2, title: 'City Lights', src: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=1200&q=80&auto=format&fit=crop', tags: ['city', 'night'], location: 'Tokyo' },
  { id: 3, title: 'Forest Path', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop', tags: ['nature', 'forest'], location: 'Unknown' },
  { id: 4, title: 'Desert Dunes', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop', tags: ['desert', 'landscape'], location: 'Sahara' },
  { id: 5, title: 'Ocean Wave', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop', tags: ['ocean', 'water'], location: 'Pacific' },
  { id: 6, title: 'Portrait Smile', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop', tags: ['portrait', 'people'], location: 'Studio' }
];

@Injectable({ providedIn: 'root' })
export class PhotoService {
  getPhotos(): Photo[] {
    return PHOTOS;
  }
}
