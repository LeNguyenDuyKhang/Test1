import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ArrowLeft, ShoppingCart, MessageCircle } from 'lucide-react-native';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  shop: string;
}

const products: Product[] = [
  { id: '1', name: '1KG KHÔ GÀ BƠ TỎI...', price: '180.000đ', image: require('./assets/xeCanCau.png'), shop: 'LTD Food' },
  { id: '2', name: 'Xế cẩu điều khiển', price: '134.000đ', image: require('./assets/xeCanCau.png'), shop: 'Thế giới đồ chơi' },
  { id: '3', name: 'Ô tô cứu hỏa biến hình', price: '134.000đ', image: require('./assets/xeCanCau.png'), shop: 'Thế giới đồ chơi' },
  { id: '4', name: 'Làm giàu giản đơn', price: '50.000đ', image: require('./assets/xeCanCau.png'), shop: 'Minh Long Book' },
  { id: '5', name: 'Hiểu lòng con trẻ', price: '50.000đ', image: require('./assets/xeCanCau.png'), shop: 'Minh Long Book' },
];

export default function ProductChatList() {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.item}>
      <Image source={ item.image } style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton} onPress={() => console.log(`Chat about ${item.name}`)}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00BFFF" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity onPress={() => console.log('Open cart')}>
          <ShoppingCart color="white" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.noticeContainer}>
        <MessageCircle color="#00BFFF" size={20} />
        <Text style={styles.noticeText}>Bạn có thắc mắc về sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#00BFFF',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noticeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
    padding: 12,
    marginBottom: 8,
  },
  noticeText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  list: {
    padding: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  shopName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  chatButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});