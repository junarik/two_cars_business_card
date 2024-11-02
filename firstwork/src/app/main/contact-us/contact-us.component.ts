import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
  animations: [
    trigger('errorAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-5px)',
          height: 0
        }),
        animate('200ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0)',
          height: '*'
        }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-5px)',
          height: 0
        }))
      ])
    ])
  ]
})

export class ContactUsComponent {
  contactUsForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(32)],
      updateOn: 'blur'
    }),
    phoneNumber: new FormControl('', {
      validators: [
        Validators.required,
        Validators.pattern('^\\+380\\d{9}$')
      ],
      updateOn: 'blur'
    })
  });
  get nameControl(): AbstractControl | null {
    return this.contactUsForm.get('name');
  }

  get phoneControl(): AbstractControl | null {
    return this.contactUsForm.get('phoneNumber');
  }

  onSubmit() {
    console.log(this.contactUsForm.value);
  }
}
