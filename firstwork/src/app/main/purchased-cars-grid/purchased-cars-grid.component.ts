import {Component } from '@angular/core';
@Component({
  selector: 'app-purchased-cars-grid',
  templateUrl: './purchased-cars-grid.component.html',
  styleUrl: './purchased-cars-grid.component.css',
})
export class PurchasedCarsGridComponent {
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
