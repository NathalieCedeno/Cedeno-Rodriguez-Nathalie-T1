import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bodega',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './bodega.component.html',
  styleUrl: './bodega.component.css'
})
export class BodegaComponent implements OnInit  {

  hoy: Date = new Date(); 
  cantidad!: string | null

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cantidad = this.route.snapshot.paramMap.get('cantidad')
  }

}
