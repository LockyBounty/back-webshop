import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';

import {Observable} from 'rxjs';

import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sorting = faFilter;

  products: any;
  productsList = [];
  currentProduct = null;
  currentIndex = -1;
  title= '';

  public model: any;


  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.productsList.filter(v => v.toLowerCase().indexOf(term.toLowerCase().trim()) > -1).slice(0, 10))
  )
  //trim() permet d'enlever les blancs lors de la recherche (avant, après)


  constructor(private router:Router, 
    private productsService:ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  toAdding(){
    this.router.navigate(['dashboard', 'product-adding'])
  }

  getAll():void{
    this.productsService.getAll().subscribe(
      data=>{
        this.products = data;
        this.productsList = data.map(x=> x = x.title)
        // console.log(this.productsList)
        console.log(this.products)
      },
      error =>{
        console.log(error)
      }
    )
  }

  refreshAll():void{
    this.getAll();
    this.currentProduct=null;
    this.currentIndex = -1;
  }

  setActiveProduct(product,index){
    this.currentIndex=index;
    this.currentProduct=product;
  }

  searchTitle(e):void{
    this.productsService.findByTitle(e).subscribe(
      data=>{
        this.products=data;
      },
      error=>{
        console.log(error)
      }
    )
  }


}
