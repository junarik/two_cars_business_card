import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-you-tube-media-player',
  templateUrl: './you-tube-media-player.component.html',
  styleUrl: './you-tube-media-player.component.css'
})
export class YouTubeMediaPlayerComponent {
  @Input() src: string = '';        // The YouTube video URL or ID
  @Input() isActive: boolean = true; // Controls whether the video is active

  // Dynamically build the embed URL based on the `src` input
  get videoUrl(): string {
    return `https://www.youtube.com/embed/${this.src}?autoplay=${this.isActive ? 1 : 0}`;
  }

  ngOnInit(): void { }
}
