import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
