import { Component, OnInit } from '@angular/core';
import { MenuService } from '../auth/menu.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];
  filteredItems: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  maxPrice: number = 0;

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchMenuItems();
  }

  // Fetch menu items from the MenuService
  fetchMenuItems(): void {
    this.menuService.getMenuItems().subscribe({
      next: (data: any) => {
        this.menuItems = data;
        this.filteredItems = data;
        this.extractCategories();
      },
      error: (error: any) => {
        console.error('Error fetching menu items:', error);
      },
    });
  }

  // Extract unique categories from the menu items
  extractCategories(): void {
    this.categories = Array.from(
      new Set(this.menuItems.map((item) => item.category))
    );
  }

  // Filter items by category

  filterByCategory(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.selectedCategory = target.value;
      this.applyFilters();
    }
  }
  
  

  // Filter items by price
  filterByPrice(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.maxPrice = Number(input.value);
    this.applyFilters();
  }

  // Apply filters based on category and price
  applyFilters(): void {
    this.filteredItems = this.menuItems.filter((item) => {
      const matchesCategory =
        !this.selectedCategory || item.category === this.selectedCategory;
      const matchesPrice =
        !this.maxPrice || item.price <= this.maxPrice;
      return matchesCategory && matchesPrice;
    });
  }

  // Add an item to the cart
  addToCart(item: any): void {
    this.cartService.addToCart(item).subscribe({
      next: (response: any) => {
        console.log('Item added to cart:', response);
      },
      error: (error: any) => {
        console.error('Error adding to cart:', error);
      },
    });
  }
}
