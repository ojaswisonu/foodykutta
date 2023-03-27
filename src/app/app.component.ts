import { Component, OnInit } from "@angular/core";
import { ProductService } from "./services/product.service";

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.scss']
})

export class AppComponent implements OnInit{
  title="Mystore"
  primary=true;

  themecolor={
    'bg-purple':true,
    'bg-primary':false
  };

  toggletheme()
  {
    this.primary=!this.primary;

    this.themecolor = {
      'bg-purple':this.primary,
      'bg-primary': !this.primary
    };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pro_ser.cartCount$.subscribe(count =>{
      console.log(count);
      this.cartCount = count;
    })
  }


  cartCount=0;
  constructor(private pro_ser : ProductService){}
  getcartCount():void{
    //this .cartcount=this.pro_ser.cartCount;


 }

}
