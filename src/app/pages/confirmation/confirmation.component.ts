import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../Data/producto';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [CurrencyPipe],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
 constructor(private cartService:CartService, private router:Router){}
 //variables paira obtener info de cliente y el carrito
 dataClient:any;
 dataCart:Product[]=[];
 totalCompra:number=0;

 //funcion para obtener los dTOS
 ngOnInit(){
  this.dataClient=this.cartService.fngetdataClient();
  this.dataCart=this.cartService.fngetData();
  this.totalCompra=this.cartService.fngetTotal();
 }

 fncompra(){
  alert("Compra realizada exitosamente, hemos enviado a su correo la confirmación de pago y la guía de rastreo");
  this.router.navigate(['']);
  this.cartService.fnlimpiarCarrito();
 }
 
}
