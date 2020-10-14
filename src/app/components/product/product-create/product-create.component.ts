import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
  };

  camposInvalidos = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createProduct(): void {

    //Barrar o cadastro caso algum campo esteja vazio
    if (this.valido()) {
      this.camposInvalidos = true;
      return;
    }

    this.camposInvalidos = false;
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!');
      this.clear();
    });
  }

  cancelar(): void {
    this.router.navigate(['/products']);
  }

  clear(): void {
    this.product.name = '';
    this.product.price = null;
  }

  valido(): boolean {
    return (!this.product.name || !this.product.price) ? true : false;
  }
}
