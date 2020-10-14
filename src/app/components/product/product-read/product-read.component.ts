import { Router } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];
  contemProdutos = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.read().subscribe(products => {
      this.products = products;
      products.length ? this.contemProdutos = true : this.contemProdutos = false;
    });
  }

  deleteProduct(id: string): void {
    this.router.navigate(['/products/delete', id]);
  }
}
