import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home-items',
  templateUrl: './home-items.component.html',
  styleUrls: ['./home-items.component.css']
})
export class HomeItemsComponent implements OnInit {
  public productList: any;

  constructor(private api: ApiService, private _cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProdut().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any)=>{
        Object.assign(a, {quantity:1,total:a.price})
      })
    })
  }

  addtocart(items){
    this._cartService.addToCart(items)
  }
}
