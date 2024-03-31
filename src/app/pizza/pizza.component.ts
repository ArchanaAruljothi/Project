import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {
  selectedItem:any;
  topItems = [
    { title: 'chicken Fajita', image: '../../assets/chicken Fajita.png', description: '“Experience our Chicken Pizza, with succulent chicken toppings on a flavorful crust, priced at $13.99.”', showDescription: false },
    { title: 'Pork-Trouble pizza', image: '../../assets/Pork Trouble pizza.png', description: '“Enjoy our Veg Pork Pizza with savory mock pork and fresh veggies on a crispy crust for just $12.99.”', showDescription: false },
    { title: 'Mutton Pizza', image: '../../assets/Mutton Pizza.png', description: '“Indulge in our Mutton Pizza, featuring tender mutton toppings on a savory crust, priced at $15.99.”', showDescription: false }
  ];
 
  bottomItems = [
    { title: 'Mushroom Pizza', image: '../../assets/mus.png', description: '“Delight in our Mushroom Pizza, featuring savory mushrooms atop a crispy crust, priced at $11.99.”', showDescription: false },
    { title: 'veg corn pizza', image: '../../assets/veg corn pizza.png', description: '““Savor our Veg Corn Pizza, bursting with fresh vegetables and sweet corn on a crispy crust, priced at $10.99.”.”', showDescription: false },
    { title: 'Avocado Pizza', image: '../../assets/am.png', description: '“Savor our Avocado Pizza, topped with creamy slices of avocado on a thin crust, priced at $14.99.”', showDescription: false }
  ];
 
  toggleDescription(item: any) {
    item.showDescription = !item.showDescription;
  }


}
