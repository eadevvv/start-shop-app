import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  checkoutForm = this.formBuilder.group({
    name: [''],
    address: ['']
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  cartItems = this.cartService.getItems();

  onSubmit(): void {
    this.cartItems = this.cartService.clear();
    window.alert('Purchased! ' + this.checkoutForm.value.name);
    this.checkoutForm.reset();
  }

  uniqueCartItems = Array.from(new Set(this.cartItems));
  quantity = this.distinctItems();

  distinctItems() {
    let counts: number[] = [];

    for (let item of this.cartItems) {
      counts[item.id] = 1 + (counts[item.id] || 0);
    }

    return counts;
  }

  clearAll() {
    this.cartService.clear();
    this.cartItems = [];
    this.uniqueCartItems = [];
    this.quantity = [];
  }
}
