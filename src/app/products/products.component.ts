import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.loadProducts();
  }

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
  });

  loadProducts() {
    this.dataService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  onSubmit() {
    this.dataService.addProduct(this.productForm.value).subscribe(data => {
      console.log(data);
      this.loadProducts();
    })
  }

  onDelete(id) {
    this.dataService.removeProduct(id).subscribe(data => {
      console.log(data);
      this.loadProducts();
    })
  }
}