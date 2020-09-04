import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = {
	  product_id: '',
	  product_name: '',
	  cost_per_unit: '',
	  selling_price: '',
	  no_of_unit_available: ''
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  saveProduct() {
    const data = {
      product_id: this.product.product_id,
	  product_name: this.product.product_name,
	  cost_per_unit: this.product.cost_per_unit,
	  selling_price: this.product.selling_price,
	  no_of_unit_available: this.product.no_of_unit_available
    };
    
	
    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    
  }

  newProduct() {
    this.submitted = false;
    this.product = {
      product_id: '',
	  product_name: '',
	  cost_per_unit: '',
	  selling_price: '',
	  no_of_unit_available: ''
    };
  }

}
