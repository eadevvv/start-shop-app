import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
