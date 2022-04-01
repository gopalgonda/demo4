import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit {
  public categoriName;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  //  let cId = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
  //  this.categoriName = cId;
  this._activatedRoute.paramMap.subscribe((params: ParamMap)=>{
    let id = parseInt(params.get('id'));
    this.categoriName = id;
  })
  }

}
