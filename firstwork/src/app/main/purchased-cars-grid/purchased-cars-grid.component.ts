import { AfterViewInit, Component } from '@angular/core';
import { Grid } from '@splidejs/splide-extension-grid';
import Splide from '@splidejs/splide';
@Component({
  selector: 'app-purchased-cars-grid',
  templateUrl: './purchased-cars-grid.component.html',
  styleUrl: './purchased-cars-grid.component.css',
})
export class PurchasedCarsGridComponent implements AfterViewInit {
  ngAfterViewInit() {
    new Splide('#second-slider-carousel', {
      pagination: true,
      arrows: true,
      grid: {
        rows: 2,
        cols: 4,
        gap: {
          row: '1rem',
          col: '1.5rem',
        },
      },
      breakpoints: {
        1024: {
          grid: {
            rows: 2,
            cols: 3,
            gap: {
              row: '1rem',
              col: '1rem',
            },
          },
        },
        768: {
          grid: {
            rows: 2,
            cols: 2,
            gap: {
              row: '1rem',
              col: '1rem',
            },
          },
        },
      },
    }).mount({ Grid });
  }
  items = [
    'Смартфон',
    'Ноутбук',
    'Планшет',
    'Навушники',
    'Клавіатура',
    'Миша',
    'Монітор',
    'Принтер',
    'Колонки',
    'Роутер',
    'Веб-камера',
    'Зарядний пристрій',
  ];
}
