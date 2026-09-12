import { Producto } from '@/models/Producto';
import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { productosIniciales } from './products.store';

// 1. Acciones posibles sobre el stock (Create/Update/Delete; el Read se hace leyendo el estado)
type Accion =
  | { type: 'AGREGAR'; payload: Producto }
  | { type: 'ACTUALIZAR'; payload: { id: string; cambios: Partial<Omit<Producto, 'id'>> } }
  | { type: 'ELIMINAR'; payload: { id: string } };

// 2. Reducer: toma el estado actual + una acción y devuelve el nuevo estado
function stockReducer(estado: Producto[], accion: Accion): Producto[] {
  switch (accion.type) {
    case 'AGREGAR':
      return [...estado, accion.payload];
    case 'ACTUALIZAR':
      return estado.map((p) => (p.id === accion.payload.id ? { ...p, ...accion.payload.cambios } : p));
    case 'ELIMINAR':
      return estado.filter((p) => p.id !== accion.payload.id);
    default:
      return estado;
  }
}

interface StockContextValue {
  productos: Producto[];
  agregarProducto: (nombre: string, cantidad: number, detalle?: string, imagenUrl?: string) => void;
  actualizarProducto: (id: string, cambios: Partial<Omit<Producto, 'id'>>) => void;
  eliminarProducto: (id: string) => void;
  obtenerProducto: (id: string) => Producto | undefined;
}

const StockContext = createContext<StockContextValue | undefined>(undefined);

// 3. Proveedor: se coloca una sola vez en app/_layout.tsx, envolviendo toda la app
export function StockProvider({ children }: { children: ReactNode }) {
  const [productos, dispatch] = useReducer(stockReducer, productosIniciales);

  const agregarProducto = (nombre: string, cantidad: number, detalle = '', imagenUrl = '') => {
    const nuevoId = Date.now().toString(); // id simple; suficiente para este alcance
    dispatch({ type: 'AGREGAR', payload: new Producto(nuevoId, nombre, cantidad, detalle, imagenUrl) });
  };

  const actualizarProducto = (id: string, cambios: Partial<Omit<Producto, 'id'>>) => {
    dispatch({ type: 'ACTUALIZAR', payload: { id, cambios } });
  };

  const eliminarProducto = (id: string) => {
    dispatch({ type: 'ELIMINAR', payload: { id } });
  };

  const obtenerProducto = (id: string) => productos.find((p) => p.id === id);

  return (
    <StockContext.Provider value={{ productos, agregarProducto, actualizarProducto, eliminarProducto, obtenerProducto }}>
      {children}
    </StockContext.Provider>
  );
}

// 4. Hook de conveniencia: cualquier pantalla llama useStock() para leer/modificar el stock
export function useStock() {
  const ctx = useContext(StockContext);
  if (!ctx) throw new Error('useStock debe usarse dentro de <StockProvider>');
  return ctx;
}
