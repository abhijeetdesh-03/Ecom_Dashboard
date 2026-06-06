import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reviews } from './features/reviews/reviews';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard-module')
        .then(m => m.DashboardModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders-module')
        .then(m => m.OrdersModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/products/products-module')
        .then(m => m.ProductsModule)
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./features/categories/categories-module')
        .then(m => m.CategoriesModule)
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./features/customers/customers-module')
        .then(m => m.CustomersModule)
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./features/inventory/inventory-module')
        .then(m => m.InventoryModule)
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./features/analytics/analytics-module')
        .then(m => m.AnalyticsModule)
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./features/reviews/reviews-module')
        .then(m => m.ReviewsModule)
  },
  {
    path: 'coupons',
    loadChildren: () =>
      import('./features/coupons/coupons-module')
        .then(m => m.CouponsModule)
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings-module')
        .then(m => m.SettingsModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
