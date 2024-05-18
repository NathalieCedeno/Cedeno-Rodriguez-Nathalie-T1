import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    FormularioComponent,
    TablaComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formulario: boolean = true

  constructor(
    private router: Router,
    private productoService: ProductoService
  ){}

  bodega() {
    const cantidad = this.productoService.productos.length 
    this.router.navigate(['/bodega',cantidad])
  }


}
