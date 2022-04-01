import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  public productList: any;

  constructor(private api: ApiService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProdut().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })

    });
  
  }

  addtocart(items: any){
    this._cartService.addToCart(items);
  }

}
