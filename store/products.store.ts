import { Producto } from '@/models/Producto';

// Datos de partida del stock. StockContext los toma como estado inicial.
export const productosIniciales: Producto[] = [
  new Producto('1', 'Bebida Cola 1.5L', 24, 'Botella retornable de 1.5 litros.', 'https://loremflickr.com/800/600/soda?lock=101'),
  new Producto('2', 'Pan de Molde', 40, 'Bolsa de 500 gramos.', 'https://loremflickr.com/800/600/bread?lock=102'),
  new Producto('3', 'Leche Entera 1L', 18, 'Tetra brik de 1 litro.', 'https://loremflickr.com/800/600/milk?lock=103'),
  new Producto('4', 'Arroz Grado 1', 30, 'Bolsa de 1 kilo.', 'https://loremflickr.com/800/600/rice?lock=104'),
  new Producto('5', 'Papas Fritas', 12, 'Bolsa individual de 150 gramos.', 'https://loremflickr.com/800/600/chips?lock=105'),
  new Producto('6', 'Chocolate en Barra', 8, 'Barra de 100 gramos.', 'https://loremflickr.com/800/600/chocolate?lock=106'),
];