import { Component, Input} from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @Input() isActive: boolean = false;
  api!: VgApiService;

  onPlayerReady(source: VgApiService) {
    this.api = source;

    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(() => {
      if (this.isActive) {
        setTimeout(() => {
          this.playVideo();
        }, 0);
      }
    });
  }

  playVideo() {
    this.api?.getDefaultMedia().play();
  }
}