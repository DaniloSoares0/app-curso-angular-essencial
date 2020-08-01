import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//be carreful, this service is an singleton
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
//we have more options here, like "undo" to call an action
  showMessage(msg: string): void {
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    });
  }

//Observer pattern waits for a reponse from server
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }
  
  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: String):Observable<Product>{
    const url =`${this.baseUrl}/${id}` //here we make a concat operation
    return this.http.get<Product>(url)
  }

  update(product:Product):Observable<Product>{
    const url =`${this.baseUrl}/${product.id}` 
    return this.http.put<Product>(url, product)
  }

  delete(id:String):Observable<Product>{
    const url =`${this.baseUrl}/${id}` 
    return this.http.delete<Product>(url)
  }
}
