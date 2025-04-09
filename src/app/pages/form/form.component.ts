import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor() {}

  /**
   * submitform
   * Returns an event but is not destructured (just a obj with no way to decipher)
   * @param event
   */
  submitForm(event: Event) {
    event.preventDefault();
    console.log(`Form submitted: ${event}`);
  }
}
