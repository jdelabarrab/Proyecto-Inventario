import { colors } from '@/contants/theme';
import { Stack } from 'expo-router';

const StockStackLayout = () => (
  <Stack
    screenOptions={{
      headerStyle: { backgroundColor: colors.bosque },
      headerTintColor: colors.blanco,
      headerTitleStyle: { fontFamily: 'Fraunces_600SemiBold' },
    }}
  >
    <Stack.Screen name="index" options={{ title: 'Stock' }} />
    <Stack.Screen name="nuevo" options={{ title: 'Nuevo producto' }} />
    <Stack.Screen name="[id]" options={{ title: 'Detalle / Editar' }} />
  </Stack>
);
export default StockStackLayout;
