import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

export const routes: Routes = [
    {path:'', component:ProductListComponent, title:'Inventario disponible'},
    {path:'cesta', component:CartComponent, title:'Cesta'},
    {path: 'checkout',component:CheckoutComponent, title: 'Checkout'},
    {path: 'confirmacion', component:ConfirmationComponent, title: 'Confirmación de pago'}
];
