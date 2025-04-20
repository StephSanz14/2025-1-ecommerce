import { Injectable } from '@angular/core'; 
import { Product } from '../Data/producto';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public productservice:ProductService) { }
//creamos una clave para el local storage
private storagekey='cartStorageKey';
  private productsCart:Product[]=[]; //inicializamos nuestra variable con el tipo de dato
  private datosCliente:any;
  private total:number=0;

  //creamos nuestros metodos del servicio
  fngetData():Product[]{
    //para el local storage
    const storedCart=localStorage.getItem(this.storagekey);
    if (storedCart) {
      this.productsCart=JSON.parse(storedCart) as Product[];
    }
    return this.productsCart;
  }

  fnaddtoCart(product: Product): void {
    let addtoCart = this.productsCart.find(p => p.name === product.name);
    console.log(addtoCart?.cartitems);
    console.log("voy despues de la variable addtoCart")
  
    if (addtoCart) {
      addtoCart.cartitems = addtoCart.cartitems !== undefined ? addtoCart.cartitems + 1 : 1;
      addtoCart.quantity -= 1;
    } else {
      const productCopy = {...product,cartitems: 1,};
      this.productsCart.push(productCopy);
          
  
        }
        //agregamos al local storage
        localStorage.setItem(this.storagekey, JSON.stringify(this.productsCart));
    console.log(this.productsCart); 
    
  }

  fnaddClient(datos:any){
    this.datosCliente=datos;
    console.log(this.datosCliente)
    //para agregarlo al localstorage
    localStorage.setItem('dataClient',JSON.stringify(this.datosCliente));
  }

  fntotalCart(total:number){
    this.total=total;
  }

  fngetTotal(){
    return this.total;
  }

  fngetdataClient(){
    return this.datosCliente;
  }

  fnlimpiarCarrito(){
    this.productsCart=[]; //inicializamos nuestra variable con el tipo de dato
  this.datosCliente="";
  this.total=0;
  localStorage.removeItem(this.storagekey);
localStorage.removeItem('dataClient');
  }

  fnremoveProduct(name: string): void {
    const storedCart = localStorage.getItem('cartStorageKey');
    this.productsCart = storedCart ? JSON.parse(storedCart) : [];
  let productInCart = this.productsCart.find(p => p.name === name);
  if (productInCart) {
    if (productInCart.cartitems > 1) { //si se encuentra mas de una unidad solo disminuimos la cantidad en el carrito
      productInCart.cartitems -= 1;
      
    } else {
      const index = this.productsCart.indexOf(productInCart); //si solo hay una unidad eliminamos del carrito de compras
      if (index > -1) {
        this.productsCart.splice(index, 1);
      }
    }
    localStorage.setItem(this.storagekey, JSON.stringify(this.productsCart));//volvemos a guardar en el localstorage
    let productInStock = this.productservice.getAllProducts().find(p => p.name === name); //esto es pura logica para trabajar el la lista de productos
    if (productInStock) {
      productInStock.quantity += 1;
    }
  }
}
}
