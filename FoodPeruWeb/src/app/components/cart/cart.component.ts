import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCart: any[] = [];
  quantityCart = 0;
  totalCart = 0;
  constructor(private productsService: ProductsService, private router: Router) {
    this.productsCart = this.productsService.products;
    this.getStatsProducts();
    localStorage.setItem('product', JSON.stringify(this.productsCart));
  }

ngOnInit(): void {
  }

  deleteProduct(product) {
    this.productsCart = this.productsCart.filter((deletedProduct) => deletedProduct !== product );
    this.productsService.products = this.productsCart;
    this.quantityCart -= product.quantity;
    this.totalCart -= (product.quantity * product.price);
    localStorage.setItem('product', JSON.stringify(this.productsCart));
    localStorage.setItem('cart', JSON.stringify(this.quantityCart));
  }

  getStatsProducts() {
    this.productsService.products.forEach(product => {
      this.quantityCart += product.quantity;
      this.totalCart += (product.quantity * product.price);
    });
    localStorage.setItem('cart', JSON.stringify(this.quantityCart));
  }

  processPayment(){
    console.log('aqui');
this.router.navigate(['/payment'])


  }

}
