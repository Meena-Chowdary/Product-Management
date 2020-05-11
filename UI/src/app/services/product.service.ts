import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:9191/product-service/products";
   }

   getAll() :Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+"/all");
   }

   getById(id:number) :Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
   }

   addProduct(user:Product) : Observable<Product>{
    return this.httpClient.post<Product>(this.baseUrl + "/add",user);

  }

  updateProduct(productId: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/update/${productId}`, value);
  }
  

  deleteById(id:number) :Observable<Product>{
    return this.httpClient.delete<Product>(`${this.baseUrl}/${id}`);
  }
   
}

