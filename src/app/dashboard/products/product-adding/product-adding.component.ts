import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-adding',
  templateUrl: './product-adding.component.html',
  styleUrls: ['./product-adding.component.scss']
})
export class ProductAddingComponent implements OnInit {

  product= {
    title : "",
    photo : "",
    description: "",
    price: 0,
    available: false
  }
  submitted = false;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  saveProduct():void{
    const data = {
      title : this.product.title,
      photo : this.product.photo,
      description : this.product.description,
      price : this.product.price,
      available: false
    }
    

    this.productsService.create(data)
      .subscribe(
        response =>{
          console.log(response);
          this.submitted = true;
        },
        error=>{
          console.log(error)
        }
      );
  }

  newProduct():void {
    this.submitted = false;
    this.product = {
      title : "",
      photo : "",
      description: "",
      price: 0,
      available: false
    }
  }

}
