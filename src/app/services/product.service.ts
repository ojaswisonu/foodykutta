import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, filter, interval, map, max, min, Observable, of, Subject, Subscriber, Subscription } from 'rxjs'
import { HttpClient} from '@angular/common/http';
import { Product } from '../product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private cartCount=0;
  cartCount$ = new BehaviorSubject<number>(0);




  value$ = of(1,2,3);
  //to create own observable
  myobserve$ = new Observable(observer =>
  {
    observer.next(1);
    observer.next(2);
    observer.complete();
    observer.next('hello');
    observer.next([2,3,4])
  })

  subject$ = new BehaviorSubject<number>(0);//creating subject


  numbers$ = of(1,2,3,4,5);

  myinterval$ = interval(2000);

  sub$! : Subscription;
  constructor(private http : HttpClient) {
    //console.log(this.value);
    //this.value$.subscribe(val => console.log(val));
    //this.value$.subscribe(val => console.log(val));
    //this.value$.subscribe(val => console.log(val));
    //this.myobserve$.subscribe(val => console.log(val));
    //this.myobserve$.subscribe({
      //next : val => console.log(val),
      //error : err => console.log(err),
      //complete : () => console.log('completed'),
      //this.numbers$
      //.pipe(
        //map(val => val*val),
       //filter(val => val % 2 == 0),
       //map(val => val+val),
       //delay(5000),
       //min(),
       //max(),
     // )
      //.subscribe(val => console.log(val));
      //this.myinterval$.subscribe(val=> console.log(val));
      //this.sub$=this.myinterval$.subscribe(val => console.log(val));
      //setTimeout(()=>{
       // if(this.sub$){
         // this.sub$.unsubscribe();
       // }},5000);

       this.subject$.subscribe(val => console.log('A-',val)); //subscribe subject
       this.subject$.next(1); //pass data using next method
       this.subject$.next(2);
       this.subject$.next(3);
       this.subject$.subscribe(val => console.log('B',val));
       this.subject$.next(4);
       this.subject$.next(5);

  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:3000/products`)
    .pipe(
      delay(2000)
    )
  }

  getProductsById(id:number):Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)


  }





  increment():void{
    this.cartCount += 1;
   console.log(this.cartCount);
   this.cartCount$.next(this.cartCount);
  }
}

