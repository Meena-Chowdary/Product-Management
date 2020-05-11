import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  item:Product;
  msg:string;
  isNew:boolean;
  constructor(
    private userService:ProductService,
    private actRoute:ActivatedRoute,
    private router:Router
    
    ) { }
    
  ngOnInit() {
    let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.userService.getById(id).subscribe(
        (data) =>{
          this.item=data;
        }
      );

    }
    else{
      this.isNew=true;
      this.item={
        "productId":0,
        "productName":'',
        "productDescription":'',
        "price":0,
        "vid":0,
        "vendor":{
          "vid":0,
          "name":'',
          "city":'',
          "mobileNo":'',
          "emailId":''
        }
        }
      };
    }
  
  save(){
    let ob:Observable<Product>;
    if(this.isNew){
      ob=this.userService.addProduct(this.item);
    }
    ob.subscribe(
      (Data) =>{
        this.router.navigateByUrl("");
      },
      (errResponse)=> {
        this.msg=errResponse.error;
        
      }
    );
  }
  list(){
    this.router.navigate(['list']);
  }

  }
