import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../Model/vendor';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  product: Product;
  constructor(private route: ActivatedRoute,private router: Router,
    private prodService: ProductService) { }
    
    ngOnInit() {
      this.loadData();
    }

    loadData(){
    this.product = new Product();
    this.productId= this.route.snapshot.params['id'];
    
    this.prodService.getById(this.productId)
      .subscribe(data => {
        this.product= data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['list']);
  }

}
