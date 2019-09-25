import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('productForm')
  productForm: NgForm;
  product = new Product();
  categories = [
    { id: 1, name: 'Białko' },
    { id: 2, name: 'Tłuszcz' },
    { id: 3, name: 'Węglowodany' }
  ];
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
this.productForm.setValue(this.product)
    }, 0)
  }
  onSubmit() {
    console.log(this.productForm.value);
  }
}
