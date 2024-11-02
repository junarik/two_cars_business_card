import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-purchased-cars-grid',
  templateUrl: './purchased-cars-grid.component.html',
  styleUrl: './purchased-cars-grid.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger(100, [
              animate(
                '500ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
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
