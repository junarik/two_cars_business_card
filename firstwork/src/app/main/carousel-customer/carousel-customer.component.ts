import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import Splide from '@splidejs/splide';
import { SingleMediaPlayerComponent } from '../single-media-player/single-media-player.component';
@Component({
  selector: 'app-carousel-customer',
  templateUrl: './carousel-customer.component.html',
  styleUrl: './carousel-customer.component.css',
})
export class CarouselCustomerComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  currentSlide: number = 0;
  splide?: Splide;
  isVideoPlaying = false;

  @ViewChildren(SingleMediaPlayerComponent)
  videoPlayers!: QueryList<SingleMediaPlayerComponent>;

  activeIndex: number = 0;

  videoSources: string[] = [
    'assets/videos/video3s.mp4',
    'assets/videos/video4s.mp4',
    'assets/videos/video5s.mp4',
    'assets/videos/video6s.mp4',
    'assets/videos/video1s.mp4',
    'assets/videos/video2s.mp4',
    'assets/videos/voice.mp4',
    'assets/videos/Audi.mp4',
  ];

  ngOnInit() {
    if (this.splide) {
      this.splide.destroy();
    }
  }

  ngAfterViewInit() {
    // Ініціалізуємо слайдер після того, як відео компоненти будуть готові
    setTimeout(() => {
      this.initializeSplide();
      // Запускаємо перше відео після ініціалізації
      const firstPlayer = this.videoPlayers.first;
      if (firstPlayer) {
        firstPlayer.playVideo();
      }
    });
  }

  updateVideoPlayingState(isPlaying: boolean) {
    this.isVideoPlaying = isPlaying;
  }

  private initializeSplide() {
    this.splide = new Splide('#default-slider', {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      pagination: false,
      arrows: false,
      speed: 300,
      easing: 'ease-in-out',
      drag: false,
    }).mount();

    // Використовуємо 'moved' замість 'move' для кращої продуктивності
    this.splide.on('move', (newIndex) => {
      this.handleSlideChange(newIndex);
    });

    // Додаємо обробник для паузи при драгу (якщо включите drag: true)
    this.splide.on('drag', () => {
      this.videoPlayers.forEach((player) => player.pauseVideo());
    });
  }

  private handleSlideChange(newIndex: number) {
    this.currentSlide = newIndex;
    this.videoPlayers.forEach((player, index) => {
      if (index === newIndex) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    });
    this.activeIndex = newIndex;
  }

  // Публічні методи для керування слайдером
  goToSlide(index: number) {
    this.splide?.go(index);
  }

  nextSlide() {
    this.splide?.go('+1');
  }

  prevSlide() {
    this.splide?.go('-1');
  }

  ngOnDestroy() {
    if (this.splide) {
      this.splide.destroy();
    }
  }
}
