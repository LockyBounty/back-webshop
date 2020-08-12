import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sorting = faFilter;
  constructor() { }

  ngOnInit(): void {
  }

}
