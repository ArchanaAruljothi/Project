import { Component } from '@angular/core';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.css'
})
export class FoodCardComponent {

  addToCart(item: string) {
    // Implement your add to cart logic here
    console.log(`Added ${item} to cart`);
  }
 }
 
 
 
