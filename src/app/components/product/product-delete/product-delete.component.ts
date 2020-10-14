import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id;
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(this.id).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products']);
    });
  };

  cancelar(): void {
    this.router.navigate(['/products']);
  }
}
