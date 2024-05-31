import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('productId'));

    this.product = products.find(
      product => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.add(product);
    window.alert(`Product ${product.name} has been added to your cart!`);
  }
}
