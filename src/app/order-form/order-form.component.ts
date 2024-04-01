import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent {
  formData: any = {};
 
  submitOrder() {
    // Assuming you have some service to handle order submission
    // Here you can call your backend service to submit the order
    // For demonstration purposes, let's just log the form data
    console.log('Form submitted:', this.formData);
 
    // Show success popup
    alert('Order placed successfully!');
 
}
}
 