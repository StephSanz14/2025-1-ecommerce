import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  constructor(private router: Router,private cartservice:CartService) {}

  private fb =  inject(FormBuilder);
  user=this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    adress: ['', [Validators.required]],
    city: ['', [Validators.required]],
    cp: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
  })

  fnOnSubmit(event:Event){
    event.preventDefault(); /* nos va a yudar a evitar la recarga natural de la pagina solo el router outlet */
    if(this.user.valid){
      alert("Datos guardados exitosamente, puedes proceder al Pago");
      console.log('funciono desde checkout');
      this.fnaddData();
      this.router.navigate(['/confirmacion']);
    }
  }
  
  fnaddData(){
   this.cartservice.fnaddClient(this.user.value); 
  }




}


