import { useStock } from '@/store/StockContext';
import { FlatList, Text, View } from 'react-native';

const ReportesScreen = () => {
  const { productos } = useStock();
  const totalUnidades = productos.reduce((acc, p) => acc + p.cantidad, 0);
  const ordenados = [...productos].sort((a, b) => a.cantidad - b.cantidad); // menor stock primero

  return (
    <View className="flex-1 bg-noche px-4 pt-6">
      <Text className="font-titulo text-2xl text-white mb-1">Reporte de inventario</Text>
      <Text className="font-cuerpo text-grisClaro mb-4">{productos.length} productos · {totalUnidades} unidades en stock</Text>

      <FlatList
        data={ordenados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-bosque rounded-lg px-4 py-3 mb-2 flex-row justify-between">
            <Text className="font-cuerpo-medio text-white">{item.nombre}</Text>
            <Text className={`font-cuerpo-medio ${item.cantidad <= 10 ? 'text-cobre' : 'text-grisClaro'}`}>{item.cantidad} u.</Text>
          </View>
        )}
      />
    </View>
  );
};
export default ReportesScreen;
