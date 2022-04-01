import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent implements OnInit {

  public selected;

  public categoriesMenus = [
    { "id": 1, "cImgs": "assets/uploads/categories/9.webp", "cName": "Top Offers" },
    { "id": 2, "cImgs": "assets/uploads/categories/5.webp", "cName": "Grocery" },
    { "id": 3, "cImgs": "assets/uploads/categories/2.webp", "cName": "Mobiles" },
    { "id": 4, "cImgs": "assets/uploads/categories/4.webp", "cName": "Fashion" },
    { "id": 5, "cImgs": "assets/uploads/categories/3.webp", "cName": "Electronics" },
    { "id": 6, "cImgs": "assets/uploads/categories/7.webp", "cName": "Home" },
    { "id": 7, "cImgs": "assets/uploads/categories/1.webp", "cName": "Appliances" },
    { "id": 8, "cImgs": "assets/uploads/categories/6.webp", "cName": "Travel" },
    { "id": 9, "cImgs": "assets/uploads/categories/8.webp", "cName": "Beaty, Toys & more" },

  ];
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get('id'));
    //   this.selected = id;
    // })
  }

  // onSelct(categiriMenu) {
  //   this._router.navigate([categiriMenu.id], {relativeTo: this._activatedRoute});
  // }
  // isSelected(categiriMenu){
  //   return categiriMenu.id === this.selected;
  // }

}
