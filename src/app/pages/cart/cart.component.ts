import { Component } from '@angular/core';
import { Product } from '../../Data/producto';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
constructor(public cartService:CartService, public productservice:ProductService){}
productsCart:Product[]=[];
total:number=0;
ngOnInit(){
  this.productsCart=this.cartService.fngetData();
  this.fntotal();
}

fntotal():void{
  this.total = 0; 
  for (let index = 0; index < this.productsCart.length; index++) {
    let precioproducto = this.productsCart[index].price * this.productsCart[index].cartitems;
    this.total += precioproducto;
  }
  this.cartService.fntotalCart(this.total);
}

fnremoveProduct(name: string): void {
  this.cartService.fnremoveProduct(name); // 
  this.productsCart = this.cartService.fngetData(); 
 this.fntotal(); 
}

}
