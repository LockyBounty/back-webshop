import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct = null;
  message = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id): void {
    this.productsService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
          // console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAvailable(status): void {
    const data = {
      title: this.currentProduct.title,
      description: this.currentProduct.description,
      available: status
    };

    this.productsService.update(this.currentProduct.id, data)
      .subscribe(
        response => {
          this.currentProduct.available = status;
          // console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    this.productsService.update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        response => {
          // console.log(response);
          this.message = 'Le produit a bien été mis à jour !';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduct(): void {
    this.productsService.delete(this.currentProduct.id)
      .subscribe(
        response => {
          // console.log(response);
          this.router.navigate(['dashboard','products']);
        },
        error => {
          console.log(error);
        });
  }
}
