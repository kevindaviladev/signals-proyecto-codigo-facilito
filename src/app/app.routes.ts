import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  {
    path: 'store',
    loadComponent: () =>
      import('./pages/store/store.component').then((c) => c.StoreComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks/tasks.component').then((c) => c.TasksComponent),
  },
];
