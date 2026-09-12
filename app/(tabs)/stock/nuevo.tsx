import CustomButton from '@/components/shared/CustomButton';
import { useStock } from '@/store/StockContext';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

const NuevoProductoScreen = () => {
  const { agregarProducto } = useStock();
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  const guardar = () => {
    if (!nombre.trim()) return Alert.alert('Falta el nombre', 'Ingresa el nombre del producto.');
    const cantidadNumerica = Number(cantidad);
    if (Number.isNaN(cantidadNumerica) || cantidadNumerica < 0) {
      return Alert.alert('Cantidad inválida', 'Ingresa un número entero igual o mayor a 0.');
    }
    agregarProducto(nombre.trim(), cantidadNumerica);
    router.back();
  };

  return (
    <View className="flex-1 bg-grisClaro px-5 pt-6">
      <Text className="font-cuerpo-medio text-noche mb-1">Nombre</Text>
      <TextInput value={nombre} onChangeText={setNombre} placeholder="Ej: Yogurt Batido 200g" className="bg-white rounded-lg px-4 py-3 mb-4 font-cuerpo border border-gray-200" />

      <Text className="font-cuerpo-medio text-noche mb-1">Cantidad</Text>
      <TextInput value={cantidad} onChangeText={setCantidad} placeholder="Ej: 20" keyboardType="numeric" className="bg-white rounded-lg px-4 py-3 mb-6 font-cuerpo border border-gray-200" />

      <CustomButton color="cobre" onPress={guardar}>Guardar producto</CustomButton>
    </View>
  );
};
export default NuevoProductoScreen;
