import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent {
  items = Array(100);
}
