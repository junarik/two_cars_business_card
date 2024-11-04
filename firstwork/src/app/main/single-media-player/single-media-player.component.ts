import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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
  @Input() src: string = '';
  @Output() videoPlayingStateChange = new EventEmitter<boolean>();

  api!: VgApiService;
  private isInitialLoad: boolean = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isActive'] && this.api?.getDefaultMedia() && !this.isInitialLoad) {
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
      this.isInitialLoad = false;
      this.pauseVideo();
    });

    this.api.getDefaultMedia().subscriptions.play.subscribe(() => {
      this.videoPlayingStateChange.emit(true);
    });

    this.api.getDefaultMedia().subscriptions.pause.subscribe(() => {
      this.videoPlayingStateChange.emit(false);
    });
  }

  playVideo() {
    if (!this.isInitialLoad) {
      this.api?.getDefaultMedia().play();
    }
  }

  pauseVideo() {
    this.api?.getDefaultMedia().pause();
  }
}