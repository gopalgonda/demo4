import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {


  public totalItem: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }

}
