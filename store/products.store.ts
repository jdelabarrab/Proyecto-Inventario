import { Producto } from '@/models/Producto';

export const products: Producto[] = [
  new Producto(
    '1',
    'Bebida Cola 1.5L',
    'Bebida gaseosa sabor cola, botella retornable de 1.5 litros, ideal para el mostrador de bebidas.',
    'https://loremflickr.com/800/600/soda?lock=101'
  ),
  new Producto(
    '2',
    'Pan de Molde',
    'Pan de molde blanco, bolsa de 500 gramos, uno de los productos de mayor rotación en el minimarket.',
    'https://loremflickr.com/800/600/bread?lock=102'
  ),
  new Producto(
    '3',
    'Leche Entera 1L',
    'Leche entera semidescremada, envase tetra brik de 1 litro, refrigerar después de abrir.',
    'https://loremflickr.com/800/600/milk?lock=103'
  ),
  new Producto(
    '4',
    'Arroz Grado 1',
    'Arroz grado 1, bolsa de 1 kilo, producto básico de la canasta familiar.',
    'https://loremflickr.com/800/600/rice?lock=104'
  ),
  new Producto(
    '5',
    'Papas Fritas',
    'Papas fritas saladas, bolsa individual de 150 gramos, snack de venta rápida en caja.',
    'https://loremflickr.com/800/600/chips?lock=105'
  ),
  new Producto(
    '6',
    'Chocolate en Barra',
    'Barra de chocolate con leche de 100 gramos, exhibida junto a la caja registradora.',
    'https://loremflickr.com/800/600/chocolate?lock=106'
  ),
];
