import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: 'Inicio' }} />

      <Stack.Screen name="products/index" options={{ title: 'Productos' }} />
      <Stack.Screen name="products/[id]" options={{ title: 'Detalle del producto' }} />
    </Stack>
  );
};

export default StackLayout;
