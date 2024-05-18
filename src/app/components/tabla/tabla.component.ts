import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements OnInit {

  productos: Producto[] = []

  constructor(
    private productosService: ProductoService
  ) { }

  ngOnInit() {
    this.productos = this.productosService.productos
  }
}
