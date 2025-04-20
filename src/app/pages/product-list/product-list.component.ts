import { Component} from '@angular/core';
import { Product } from '../../Data/producto';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent { 
  product:Product[]=[]; /* aqui va a recibir los datos y por esta variable vamos a tener acceso a los datos del servicio */
  /* necesitamos inyectar el uso del sevicio */
 constructor(public productservice:ProductService, public cartService:CartService){}
 //creamos los métodos
 ngOnInit(){ 
  this.fngetData();
}

fngetData(){
  this.product=this.productservice.getAllProducts(); /* llamamos a la funcion propia del servicio para obtener el arreglo de productos */
  console.log(this.product);
  console.log('funciono'); 
}

fnaddtoCart(name:string):void{
  let producttoadd = this.product.find(p => p.name === name);
  if (producttoadd) {
    this.cartService.fnaddtoCart(producttoadd);
    producttoadd.quantity-=1; 
  }
}

}
