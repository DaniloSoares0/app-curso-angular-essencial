import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable } from 'rxjs';

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
  
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }
}
