import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-single-media-player',
  templateUrl: './single-media-player.component.html',
  styleUrl: './single-media-player.component.css',
})
export class SingleMediaPlayerComponent implements OnChanges {
  @Input() isActive: boolean = false;

  api!: VgApiService;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isActive'] && this.api?.getDefaultMedia()) {
      if (this.isActive) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    }
  }

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

  pauseVideo() {
    this.api?.getDefaultMedia().pause();
  }
}
