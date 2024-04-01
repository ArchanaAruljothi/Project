import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  selectedItem:any;
  topItems = [
    { title: 'Mac and Cheese', image: '../../assets/p111111.png', description: '“Experience our Chicken Pizza, with succulent chicken toppings on a flavorful crust, priced at $13.99.”', showDescription: false },
    { title: 'chilli pasta', image: '../../assets/n7.png', description: '“Enjoy our Veg Pork Pizza with savory mock pork and fresh veggies on a crispy crust for just $12.99.”', showDescription: false },
    { title: 'Tomatoes Crisp', image: '../../assets/n88.png', description: '“Indulge in our Mutton Pizza, featuring tender mutton toppings on a savory crust, priced at $15.99.”', showDescription: false }
  ];
 
  bottomItems = [
    { title: 'Egg Classic Pasta', image: '../../assets/n999.png', description: '“Delight in our Mushroom Pizza, featuring savory mushrooms atop a crispy crust, priced at $11.99.”', showDescription: false },
    { title: 'Fried Red Pasta', image: '../../assets/n1010.png', description: '““Savor our Veg Corn Pizza, bursting with fresh vegetables and sweet corn on a crispy crust, priced at $10.99.”.”', showDescription: false },
    { title: '2 in one pasta', image: '../../assets/n20220.png', description: '“Savor our Avocado Pizza, topped with creamy slices of avocado on a thin crust, priced at $14.99.”', showDescription: false }
  ];
 
  toggleDescription(item: any) {
    item.showDescription = !item.showDescription;
  }


}
