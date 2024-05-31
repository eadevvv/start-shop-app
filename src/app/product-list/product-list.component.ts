import { Component } from '@angular/core';
import { Product, products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductAlertsComponent,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [...products];

  onShare() {
    window.alert('You have been shared this element!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
