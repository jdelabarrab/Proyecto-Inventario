import CustomButton from '@/components/shared/CustomButton';
import { useStock } from '@/store/StockContext';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  const { productos } = useStock();
  const totalUnidades = productos.reduce((acc, p) => acc + p.cantidad, 0);
  const bajoStock = productos.filter((p) => p.cantidad <= 10).length;

  return (
    <SafeAreaView className="flex-1 bg-noche px-5 pt-6">
      <Text className="font-titulo text-3xl text-white mb-1">Inventario</Text>
      <Text className="font-cuerpo text-grisClaro mb-6">Panel de control del stock</Text>

      <View className="flex-row gap-3 mb-8">
        <View className="flex-1 bg-bosque rounded-xl p-4">
          <Text className="font-cuerpo text-grisClaro text-xs">Productos</Text>
          <Text className="font-titulo text-2xl text-white">{productos.length}</Text>
        </View>
        <View className="flex-1 bg-bosque rounded-xl p-4">
          <Text className="font-cuerpo text-grisClaro text-xs">Unidades</Text>
          <Text className="font-titulo text-2xl text-white">{totalUnidades}</Text>
        </View>
        <View className="flex-1 bg-bosque rounded-xl p-4">
          <Text className="font-cuerpo text-grisClaro text-xs">Bajo stock</Text>
          <Text className="font-titulo text-2xl text-cobre">{bajoStock}</Text>
        </View>
      </View>

      <CustomButton color="cobre" className="mb-3" onPress={() => router.push('/(tabs)/stock')}>
        Ir al Stock
      </CustomButton>
      <CustomButton color="bosque" onPress={() => router.push('/(tabs)/reportes')}>
        Ver Reportes
      </CustomButton>
    </SafeAreaView>
  );
};
export default DashboardScreen;
