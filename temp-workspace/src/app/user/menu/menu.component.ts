import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes = [
    { name: 'Pizza', description: 'Cheesy pizza', price: 12, category: 'Main Course' },
    { name: 'Spring Rolls', description: 'Crispy rolls', price: 8, category: 'Starters' },
    { name: 'Brownie', description: 'Chocolate dessert', price: 6, category: 'Desserts' },
  ];

  categories = ['Starters', 'Main Course', 'Desserts'];
  filteredDishes = [...this.dishes];

  ngOnInit() {}

  filterByCategory(category: string) {
    this.filteredDishes = this.dishes.filter(
      (dish) => !category || dish.category === category
    );
  }

  filterByPrice(maxPrice: number) {
    this.filteredDishes = this.dishes.filter(
      (dish) => !maxPrice || dish.price <= maxPrice
    );
  }

  addToCart(dish: any) {
    console.log(`Added ${dish.name} to cart.`);
    // Implement cart logic here
  }
}
