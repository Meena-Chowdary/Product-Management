import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"list",component:ProductsListComponent},
  {path:"add",component:ProductFormComponent},
  {path: 'update/:id', component: UpdateProductComponent },
  {path: 'details/:id', component:ProductDetailsComponent },
  {path:'',component:LoginComponent},
  {path:'logout',component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
