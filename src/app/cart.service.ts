import { Keeb } from './keeb';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Keeb[] = [];

addToCart(keeb: Keeb) {
  this.items.push(keeb);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}

constructor(
  private http: HttpClient
) {}

getShippingPrices() {
  return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
}

}