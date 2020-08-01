import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  //control the two way databinding
product: Product={
  name: "",
  price:null
}

  //importing a service by dependency injection
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  createProduct(): void{
   // returns an Observer,
    this.productService.create(this.product).subscribe(()=>{
      this.router.navigate(['/products'])
      this.productService.showMessage("Operação realizada com sucesso !")
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
}
