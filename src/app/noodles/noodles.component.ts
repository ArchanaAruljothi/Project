import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-noodles',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './noodles.component.html',
  styleUrl: './noodles.component.css'
})
export class NoodlesComponent {
  selectedItem:any;
  topItems = [
    { title: 'chicken Fajita', image: '../../assets/n111.png', description: '“Experience our Chicken Pizza, with succulent chicken toppings on a flavorful crust, priced at $13.99.”', showDescription: false },
    { title: 'Pork-Trouble pizza', image: '../../assets/n22.png', description: '“Enjoy our Veg Pork Pizza with savory mock pork and fresh veggies on a crispy crust for just $12.99.”', showDescription: false },
    { title: 'Mutton Pizza', image: '../../assets/n33.png', description: '“Indulge in our Mutton Pizza, featuring tender mutton toppings on a savory crust, priced at $15.99.”', showDescription: false }
  ];
 
  bottomItems = [
    { title: 'Mushroom Pizza', image: '../../assets/n44.png', description: '“Delight in our Mushroom Pizza, featuring savory mushrooms atop a crispy crust, priced at $11.99.”', showDescription: false },
    { title: 'veg corn pizza', image: '../../assets/n55.png', description: '““Savor our Veg Corn Pizza, bursting with fresh vegetables and sweet corn on a crispy crust, priced at $10.99.”.”', showDescription: false },
    { title: 'Avocado Pizza', image: '../../assets/n6666.png', description: '“Savor our Avocado Pizza, topped with creamy slices of avocado on a thin crust, priced at $14.99.”', showDescription: false }
  ];
 
  toggleDescription(item: any) {
    item.showDescription = !item.showDescription;
  }

}
