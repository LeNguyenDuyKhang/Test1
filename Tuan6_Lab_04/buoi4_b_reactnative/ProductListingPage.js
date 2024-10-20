import React from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ArrowLeft, ShoppingCart, Search } from 'lucide-react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  image: string;
}

const products: Product[] = [
  { id: '1', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 69900, discount: 39, image: require('./assets/Cap.png') },
  { id: '2', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 69900, discount: 39, image: require('./assets/Cap.png') },
  { id: '3', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 69900, discount: 39, image: require('./assets/Cap.png') },
  { id: '4', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 69900, discount: 39, image: require('./assets/Cap.png') },
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 69900, discount: 39, image: require('./assets/Cap.png') },
  { id: '6', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 69900, discount: 39, image: require('./assets/Cap.png') },
];

export default function ProductListingPage() {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={item.image } style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price.toLocaleString()}đ</Text>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>-{item.discount}%</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#00BFFF" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <ArrowLeft color="#00BFFF" size={24} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Search color="#999" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Dây cáp usb"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity onPress={() => console.log('Open cart')}>
          <ShoppingCart color="#00BFFF" size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  productList: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '48%',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  discountBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF6347',
    borderRadius: 10,
    padding: 5,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});