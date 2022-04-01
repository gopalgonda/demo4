import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  public items: { field: string}[] = [
    {field: 'option1'},
    {field: 'option2'},
    {field: 'option3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
