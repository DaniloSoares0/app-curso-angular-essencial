import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//be carreful, this service is an singleton
@Injectable({
  providedIn: 'root'
})
export class ProductService {

 baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
//we have more options here, like "undo" to call an action
 showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msg-erro'] : ['msg-success']
    });
  }

//Observer pattern waits for a reponse from server
  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
    .pipe(map(obj => obj),
     catchError(e => this.erroHandler(e))
    );
  }

  read():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).
    pipe(map(obj => obj),
    catchError(e => this.erroHandler(e))
   );
  }

  readById(id: String):Observable<Product>{
    const url =`${this.baseUrl}/${id}` //here we make a concat operation
    return this.http.get<Product>(url)
    .pipe(map(obj => obj),
    catchError(e => this.erroHandler(e))
   );
  }

  update(product:Product):Observable<Product>{
    const url =`${this.baseUrl}/${product.id}` 
    return this.http.put<Product>(url, product)
    .pipe(map(obj => obj),
    catchError(e => this.erroHandler(e))
   );
  }

  delete(id:number):Observable<Product>{
    const url =`${this.baseUrl}/${id}` 
    return this.http.delete<Product>(url)
    .pipe(map(obj => obj),
    catchError(e => this.erroHandler(e))
   );
  }

  erroHandler(e:any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)
    console.log(e)
    return EMPTY
  }
}
