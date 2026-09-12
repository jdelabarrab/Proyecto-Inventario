import CustomButton from '@/components/shared/CustomButton';
import { useStock } from '@/store/StockContext';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, FlatList, Pressable, Text, TextInput, View } from 'react-native';

const StockScreen = () => {
  const { productos, eliminarProducto } = useStock();
  const [busqueda, setBusqueda] = useState('');

  // Consulta de existencias: filtra el listado por nombre en tiempo real.
  const productosFiltrados = productos.filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  const confirmarEliminacion = (id: string, nombre: string) => {
    Alert.alert('Eliminar producto', `¿Eliminar "${nombre}" del stock?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => eliminarProducto(id) },
    ]);
  };

  return (
    <View className="flex-1 bg-grisClaro px-4 pt-4">
      <TextInput
        placeholder="Buscar producto por nombre..."
        value={busqueda}
        onChangeText={setBusqueda}
        className="bg-white rounded-lg px-4 py-3 mb-4 font-cuerpo border border-gray-200"
      />

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={<Text className="font-cuerpo text-center mt-10 text-textoSecundario">Sin resultados</Text>}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center">
            <Pressable className="flex-1" onPress={() => router.push(`/(tabs)/stock/${item.id}`)}>
              <Text className="font-titulo text-lg text-noche">{item.nombre}</Text>
              <Text className={`font-cuerpo ${item.cantidad <= 10 ? 'text-peligro' : 'text-textoSecundario'}`}>
                Cantidad: {item.cantidad}{item.cantidad <= 10 ? ' · Bajo stock' : ''}
              </Text>
            </Pressable>

            <View className="flex-row gap-2">
              <CustomButton variant="text-only" color="bosque" onPress={() => router.push(`/(tabs)/stock/${item.id}`)}>
                Editar
              </CustomButton>
              <CustomButton variant="text-only" color="cobre" onPress={() => confirmarEliminacion(item.id, item.nombre)}>
                Eliminar
              </CustomButton>
            </View>
          </View>
        )}
      />

      <View className="absolute bottom-6 left-4 right-4">
        <CustomButton color="cobre" onPress={() => router.push('/(tabs)/stock/nuevo')}>
          + Nuevo producto
        </CustomButton>
      </View>
    </View>
  );
};
export default StockScreen;
