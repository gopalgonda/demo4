import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  public pViewsId;

  constructor(private _route: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
     let  view = parseInt(params.get('id'));
     this.pViewsId = view;
   });
  }

}
