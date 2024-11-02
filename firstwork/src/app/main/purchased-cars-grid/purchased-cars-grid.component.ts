import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-purchased-cars-grid',
  templateUrl: './purchased-cars-grid.component.html',
  styleUrl: './purchased-cars-grid.component.css',
  // animations: [
  //   trigger('animation', [
  //     transition('* <=> *', [
  //       query(':enter', [ style({ opacity: 0, transform: 'scale(0,7)' })]),
  //       animate('500ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
  //     ]),
  //   ]),
  // ],
})
export class PurchasedCarsGridComponent {
  @Input() showLoadMore!: boolean;
  @Input() displayedItems!: string[];
  @Output() clickButton = new EventEmitter<void>();

  handleButtonClick() {
    this.clickButton.emit();
    console.log('emited' + ' ' + this.showLoadMore + ' ' + this.displayedItems);
  }
}
