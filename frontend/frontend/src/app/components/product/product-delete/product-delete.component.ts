import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Product } from '../product.model';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private router: Router, 
              private productService: ProductService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(id).subscribe(product =>{
    this.product = product
    })
  }


  deleteProduct(): void{
   this.productService.delete(this.product.id).subscribe(()=>{ 
   this.productService.showMessage("Produto excluido com sucesso !")
   this.router.navigate(['/products'])
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
}
