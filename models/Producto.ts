// Cada producto del stock necesita, como mínimo, id, nombre y cantidad.
// detalle e imagenUrl quedan opcionales para no perder el catálogo actual.
export class Producto {
  id: string;
  nombre: string;
  cantidad: number;
  detalle: string;
  imagenUrl: string;

  constructor(
    id: string,
    nombre: string,
    cantidad: number,
    detalle: string = '',
    imagenUrl: string = ''
  ) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.detalle = detalle;
    this.imagenUrl = imagenUrl;
  }
}
