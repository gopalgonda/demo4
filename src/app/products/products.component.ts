import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CartService} from "../service/cart.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;

  public selectProducts;

  constructor(private api: ApiService, private _rout: Router, private _activatedRoute: ActivatedRoute, private _cartService: CartService) {
  }

  ngOnInit(): void {
    this.api.getProdut().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })

    });

    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let  view = parseInt(params.get('id'));
      this.selectProducts = view;
    })
  }

  addtocart(item: any){
    this._cartService.addToCart(item);
  }


  onProducts(item) {
    this._rout.navigate(['item.image'], {relativeTo: this._activatedRoute});
  }
  isSelected(item){
    return item.image === this.selectProducts;
  }
}
