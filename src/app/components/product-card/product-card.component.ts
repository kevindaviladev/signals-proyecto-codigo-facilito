import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  cartService = inject(CartService);
  addProduct(product: Product) {
    this.cartService.addProduct(product);
  }
}
