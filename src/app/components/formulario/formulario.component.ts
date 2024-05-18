import { Categoria, Producto } from './../../interfaces/producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {

  categorias: Categoria[] = []
  form: FormGroup

  constructor(
    private productosService: ProductoService,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      expiracion: ['', Validators.required],
      categoria: ['', Validators.required],
      color: ['', Validators.required],
      correo: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.categorias = this.productosService.categorias
  }

  agregar() {
    const selectedCategoryId = this.form.value.categoria;
    const selectedCategory = this.categorias.find(cat => cat.id == selectedCategoryId);
  
    const product: Producto = {
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      expiracion: this.form.value.expiracion,
      categoria: selectedCategory,
      color: this.form.value.color,
      correo: this.form.value.correo,
    };

    this.productosService.agregarProducto(product);
    this.form.reset();
  }
  

}
