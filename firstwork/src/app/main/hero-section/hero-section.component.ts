import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  
  isVideoLoaded = false;
  videoSrc = 'assets/videos/Audi.mp4';
  placeholderImage = 'assets/images/Audi1img.jpg';

  ngOnInit() {
    // Попереднє завантаження відео
    this.preloadVideo();
  }

  private preloadVideo() {
    const video = new Image();
    video.src = this.videoSrc;
    
    // Створюємо окремий елемент відео для попереднього завантаження
    const preloadVideo = document.createElement('video');
    preloadVideo.src = this.videoSrc;
    preloadVideo.load(); // Починаємо завантаження
  }

  onVideoCanPlay() {
    // Невелика затримка перед показом відео для впевненості, що воно повністю готове
    setTimeout(() => {
      this.isVideoLoaded = true;
      if (this.videoElement) {
        this.videoElement.nativeElement.play()
          .catch(error => console.log('Auto-play prevented:', error));
      }
    }, 100);
  }
}