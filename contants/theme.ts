// Paleta "Bosque Nocturno" (identidad visual de De la Barra Consultores).
// Se define una sola vez aquí y tailwind.config.js la importa,
// para no repetir los mismos hex en dos lugares distintos.
export const colors = {
  bosque: '#14342B',        // verde bosque oscuro — primario: headers, tab bar, tarjetas
  noche: '#0D1B2A',         // azul noche — fondos oscuros, textos principales
  cobre: '#C97B3D',         // cobre — acento: acciones (crear, guardar, eliminar)
  blanco: '#FFFFFF',
  grisClaro: '#F2F1ED',     // fondo neutro para listas/tarjetas claras
  textoSecundario: '#5B6B63',
  peligro: '#B3261E',       // alertas de bajo stock / botón eliminar
};

export const fonts = {
  titulo: 'Fraunces_600SemiBold',   // títulos y encabezados
  cuerpo: 'WorkSans_400Regular',    // texto de cuerpo
  cuerpoMedio: 'WorkSans_500Medium',
};
