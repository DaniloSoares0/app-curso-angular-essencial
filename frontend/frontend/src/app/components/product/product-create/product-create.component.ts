import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  //importing a service by dependency injection
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  createProduct(): void{
    this.productService.showMessage("Operação realizada com sucesso !")
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
