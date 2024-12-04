import { Injectable } from '@angular/core';
import { of } from 'rxjs';  // Import 'of' to return an observable

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  // Add item to the cart and return an observable
  addToCart(item: any) {
    this.cartItems.push(item);
    // Return an observable using 'of()'
    return of(item); // 'of()' will wrap the item in an observable
  }

  // Get cart items
  getCartItems(): any[] {
    return this.cartItems;
  }

  // Clear the cart
  clearCart() {
    this.cartItems = [];
  }
}
