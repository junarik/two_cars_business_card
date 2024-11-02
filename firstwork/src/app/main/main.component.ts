import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  items: string[] = [
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
    'Якась ще фігня',
    'Просто'
  ];

  displayedItems: string[] = [];
  private itemsPerClick: number = 6;

  ngOnInit(){
    this.loadMoreItems();
  }

  handleButtonClick() {
    this.loadMoreItems();
  }

  loadMoreItems()
  {
    const nextIndex = this.displayedItems.length;
    const newItems = this.items.slice(nextIndex, nextIndex + this.itemsPerClick);

    this.displayedItems = [...this.displayedItems, ...newItems];
  }
}
