import CustomButton from '@/components/shared/CustomButton';
import { useStock } from '@/store/StockContext';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput } from 'react-native';

const DetalleProductoScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { obtenerProducto, actualizarProducto, eliminarProducto } = useStock();
  const producto = obtenerProducto(id);

  const [nombre, setNombre] = useState(producto?.nombre ?? '');
  const [cantidad, setCantidad] = useState(String(producto?.cantidad ?? ''));

  if (!producto) return <Redirect href="/(tabs)/stock" />; // ya no existe (fue eliminado)

  const guardarCambios = () => {
    const cantidadNumerica = Number(cantidad);
    if (!nombre.trim() || Number.isNaN(cantidadNumerica) || cantidadNumerica < 0) {
      return Alert.alert('Datos inválidos', 'Revisa el nombre y la cantidad.');
    }
    actualizarProducto(producto.id, { nombre: nombre.trim(), cantidad: cantidadNumerica });
    Alert.alert('Guardado', 'Los cambios se guardaron correctamente.');
  };

  const eliminar = () => {
    Alert.alert('Eliminar producto', `¿Eliminar "${producto.nombre}" del stock?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => { eliminarProducto(producto.id); router.replace('/(tabs)/stock'); } },
    ]);
  };

  return (
    <ScrollView className="flex-1 bg-grisClaro px-5 pt-6">
      <Text className="font-cuerpo-medio text-noche mb-1">Nombre</Text>
      <TextInput value={nombre} onChangeText={setNombre} className="bg-white rounded-lg px-4 py-3 mb-4 font-cuerpo border border-gray-200" />

      <Text className="font-cuerpo-medio text-noche mb-1">Cantidad</Text>
      <TextInput value={cantidad} onChangeText={setCantidad} keyboardType="numeric" className="bg-white rounded-lg px-4 py-3 mb-6 font-cuerpo border border-gray-200" />

      <CustomButton color="bosque" className="mb-3" onPress={guardarCambios}>Guardar cambios</CustomButton>
      <CustomButton color="cobre" onPress={eliminar}>Eliminar producto</CustomButton>
    </ScrollView>
  );
};
export default DetalleProductoScreen;