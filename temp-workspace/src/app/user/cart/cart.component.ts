import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: any[] = [];

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    console.log('Checkout successful!', this.cartItems);
    // Add logic to handle checkout
  }
}
