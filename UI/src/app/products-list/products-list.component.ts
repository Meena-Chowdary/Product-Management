import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products:Product[];
  errMsg:string;
  list:any;
  constructor(private prodServ:ProductService,
    private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.products=null;
    this.errMsg=null;
    this.prodServ.getAll().subscribe(
      (data) => {this.products = data; },
      (err)=>{this.errMsg='Sorry server not reachable';}
    );
  }
  delete(id:number){
    if(confirm(`Are you sure of deleting vendor#${id}`)){
      this.prodServ.deleteById(id).subscribe(
        ()=>{this.loadData();},
        (err)=>{this.errMsg=err;}
      )
   
  }

}

  productDetails(productId: number){
    this.router.navigate(['details',productId ]);
  }

  updateProduct(productId: number){
    this.router.navigate(['update', productId]);
  }
}
