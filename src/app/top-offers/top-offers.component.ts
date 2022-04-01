import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {ApiService} from '../service/api.service';
import { CartService } from '../service/cart.service';




@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-top-offers',
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css']
})
export class TopOffersComponent implements OnInit {

public productList: any;

  

  constructor(private _http: HttpClient, private _cartService: CartService, private api: ApiService ) { }


  addtocart(items: any){
    this._cartService.addToCart(items);
  }

  ngOnInit(): void {
    this.api.getProdut().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })

    });
  }

}
