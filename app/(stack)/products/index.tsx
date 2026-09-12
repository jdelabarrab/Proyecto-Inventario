import { products } from '@/store/products.store';
import { Link } from 'expo-router';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Productos</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagenUrl }} style={styles.image} />

            <View style={styles.cardBody}>
              <Text style={styles.title}>{item.titulo}</Text>
              <Text style={styles.detail} numberOfLines={2}>
                {item.detalle}
              </Text>

              <Link href={`/(stack)/products/${item.id}`} asChild>
                <Text style={styles.button}>Ver detalle</Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 16 },
  header: { fontSize: 24, fontWeight: '700', color: '#1F2937', marginTop: 12, marginBottom: 12 },
  listContent: { paddingBottom: 24 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  image: { width: '100%', height: 160, backgroundColor: '#E5E7EB' },
  cardBody: { padding: 14 },
  title: { fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 4 },
  detail: { fontSize: 14, color: '#4B5563', marginBottom: 12 },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    color: '#FFFFFF',
    fontWeight: '600',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default ProductsScreen;
