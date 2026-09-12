import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href="/(stack)/products" />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: product.imagenUrl }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{product.titulo}</Text>
        <Text style={styles.detail}>{product.detalle}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  content: { paddingBottom: 24 },
  image: { width: '100%', height: 260, backgroundColor: '#E5E7EB' },
  body: { padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#111827', marginBottom: 10 },
  detail: { fontSize: 16, lineHeight: 22, color: '#374151' },
});

export default ProductScreen;