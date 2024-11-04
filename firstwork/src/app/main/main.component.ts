import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  isSubmited = false;

  constructor(private mainService: MainService) {

  }

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
  private itemsPerClick: number = 3;

  ngOnInit() {
    this.loadMoreItems();
  }

  handleButtonClick() {
    this.loadMoreItems();
  }

  loadMoreItems() {
    const nextIndex = this.displayedItems.length;
    const newItems = this.items.slice(nextIndex, nextIndex + this.itemsPerClick);

    this.displayedItems = [...this.displayedItems, ...newItems];
  }

  submitTicketToCrm(formGroup: FormGroup) {
    this.mainService.submitTicketToCrm(formGroup.value.name, formGroup.value.phoneNumber)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error and log it
          console.error('Error occurred while submitting ticket:', error);

          // Optionally show a message to the user here, if needed
          // this.toastrService.error('Failed to submit ticket');

          // Re-throw the error so it can be handled further up if needed
          return throwError(() => new Error('Failed to submit ticket'));
        })
      )
      .subscribe({
        next: (response) => {
          // Handle successful response
          this.mainService.assignTicketToAdminUser(response.data.orderId)
            .pipe(
              catchError((error: HttpErrorResponse) => {
                // Handle the error and log it
                console.error('Error occurred while assigning ticket admin user:', error);

                // Optionally show a message to the user here, if needed
                // this.toastrService.error('Failed to submit ticket');

                // Re-throw the error so it can be handled further up if needed
                return throwError(() => new Error('Failed to assign ticket to admin user'));
              }))
            .subscribe({
              next: (response) => {
                this.isSubmited = true;
              }
            });
        }
      });
  }
}
