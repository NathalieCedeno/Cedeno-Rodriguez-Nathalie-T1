export interface Producto {
  nombre: string
  precio: number
  expiracion: Date
  categoria?: Categoria
  color: string
  correo: string
}

export interface Categoria {
  id: number
  categoria: string
}