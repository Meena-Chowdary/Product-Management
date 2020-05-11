import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private prodService: ProductService) { }

  ngOnInit() {
    this.product= new Product();

    this.productId = this.route.snapshot.params['id'];
    
    this.prodService.getById(this.productId)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.prodService.updateProduct(this.productId, this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product= new Product();
    this.gotoList();
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['list']);
  }
}


