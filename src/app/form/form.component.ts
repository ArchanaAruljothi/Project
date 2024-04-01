
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

 
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 
 peopleOptions: number[] = Array.from({length: 10}, (_, i) => i + 1); // Array from 1 to 10
 showPopup: boolean = false;
 constructor(private _router:Router) { }
 submitForm() {
   // Logic for form submission
   window.alert("Great, Your Booking Confirmed!");
   // Show the pop-up message
   this.showPopup = true;
   this._router.navigate(['home']);
  }
}
 