import { Component } from '@angular/core';
import { Product } from '../product';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductsListComponent {



  products:Product[]=[]

  constructor(private pro_ser : ProductService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pro_ser.getProducts().subscribe(products =>
      {
        this.products =products;
        this.filtered =products;
      });

  }
   addtocart(event:any,product:any){
     //onsole.log(event,product);
     //console.log("item added");
     this.pro_ser.increment();
}
private _filter='';
get filter():string{
  return this._filter;
}
set filter(fb:string){
  this._filter=fb;
  this.filterproducts(this._filter);
}
filtered : Product[]=this.products;
showimage= true;
filterproducts(searchvalue:string){
  this.filtered=this.products.filter(product =>{
    return product.name.toLowerCase().includes(searchvalue.toLowerCase())
  })
}
onRatingClicked(rating:number):void{
  alert(`you clicked ${rating}`);
}
}




