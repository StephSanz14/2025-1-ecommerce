import { Injectable } from '@angular/core';
import { data } from '../Data';
import { Product } from '../Data/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //inicializamos nuestra variable con el tipo de dato y la información precargada
  private products:Product[]=data;
  constructor() { }
  //creamos nuestros metodos del servicio
  public getAllProducts():Product[]{
    return this.products; //cuando llamemos a la variable me va a retonar todos los atributos o variables que ya esta inicializado
  }

  
} 
