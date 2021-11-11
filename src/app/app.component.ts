import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  items: MenuItem[] = 
    [
      {name: "Chicken Fingers", category: "main dish", price: 11.99 },
      {name: "Pizza", category: "main dish", price: 11.99 },
      {name: "Wings", category: "side", price: 8.99 },
      {name: "Breadsticks", category: "side", price: 4.99 },
      {name: "Caeser Salad", category: "salad", price: 5.99 },
      {name: "Cinnastix", category: "dessert", price: 8.99 }
    ]    
}
