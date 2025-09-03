import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../product';

@Component({
  selector: 'app-cidade-component',
  standalone: false,
  templateUrl: './cidade-component.html',
  styleUrl: './cidade-component.css'
})
export class CidadeComponent {
  
  products: Product[] = [];
  formGroupProduct: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupProduct = formBuilder.group({
      name: [''],
      uf: [''],
      pais: [''],
    })
  }

  save(){
      this.products.push(this.formGroupProduct.value);
      this.formGroupProduct.reset();
  }
}
