import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  /**
   * submitform
   * With Reactive Form, you can see certain additional information
   * If you just need the value, simply use property "value"
   * @param event
   */
  submitForm(event: Event) {
    event.preventDefault();
    console.log(`Form submitted`);
    console.log(this.loginForm.value);
  }
}
