import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

//be carreful, this service is an singleton
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }
//we have more options here, like "undo" to call an action
  showMessage(msg: string): void {
    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    });
  }
}
