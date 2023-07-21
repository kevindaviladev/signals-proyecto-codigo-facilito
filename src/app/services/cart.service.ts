import { Injectable, signal, inject, computed } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  private productService = inject(ProductsService);

  totalItems = computed(() => this.cart().length);

  amount = computed(() => {
    return this.cart().reduce((prev: number, curr: Product) => {
      return prev + curr.price;
    }, 0);
  });

  addProduct(product: Product) {
    this.cart.update((products) => [...products, product]);

    this.productService.products()?.forEach((p) => {
      if (p.id === product.id) {
        p.rating.count = p.rating.count - 1;
      }
    });
  }

  removeProduct(index: number) {
    this.cart.mutate((products) => {
      const product = products.splice(index, 1);
      this.productService.products()?.forEach((p) => {
        if (p.id === product[0]?.id) {
          p.rating.count = p.rating.count + 1;
        }
      });
    });
  }
}
