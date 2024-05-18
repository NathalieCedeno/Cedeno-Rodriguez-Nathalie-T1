import { Injectable } from '@angular/core';
import { Categoria, Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private listCategorias: Categoria[] = [
    { id: 1, categoria: 'Vegetales' },
    { id: 2, categoria: 'Comestible' },
    { id: 3, categoria: 'Hogar' },
    { id: 4, categoria: 'Tecnología' },
    { id: 5, categoria: 'Ropa' },
    { id: 6, categoria: 'Juguetes' },
    { id: 7, categoria: 'Deportes' },
    { id: 8, categoria: 'Libros' }
  ];

  private listProductos: Producto[] = []

  get categorias () {
    return this.listCategorias
  }

  get productos () {
    return this.listProductos
  }

  agregarProducto(producto: Producto) {
    this.listProductos.push(producto)
  }


}
