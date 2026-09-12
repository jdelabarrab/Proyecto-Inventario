export class Producto {
  id: string;
  titulo: string;
  detalle: string;
  imagenUrl: string;

  constructor(id: string, titulo: string, detalle: string, imagenUrl: string) {
    this.id = id;
    this.titulo = titulo;
    this.detalle = detalle;
    this.imagenUrl = imagenUrl;
  }
}
