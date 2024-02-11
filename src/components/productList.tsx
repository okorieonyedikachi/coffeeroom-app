import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Sizes, colors } from '~/constants/theme';

export interface productListProps {
  productTitle?: string;
  productDescription?: string;
  productprice?: number;
  productImage?: string;
}

const ProductList = () => {
  return (
    <ScrollView scrollEnabled horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('assets/image 5 (1).png')} style={styles.productImage} />
        </View>
        <View style={styles.productDescription}>
          <Text style={styles.productTitle}>Cappuccino</Text>
          <Text style={{ color: colors.primaryColor, marginBottom: 10, fontSize: 12 }}>
            With Steamed Milk
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text style={styles.productPrice}>
              <Text style={{ color: '#D17842' }}>$ </Text> 4.20
            </Text>
            <Pressable style={styles.buttton}>
              <Text style={{ fontSize: Sizes.md, color: colors.primaryColor }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('assets/image 5 (1).png')} style={styles.productImage} />
        </View>
        <View style={styles.productDescription}>
          <Text style={styles.productTitle}>Cappuccino</Text>
          <Text style={{ color: colors.primaryColor, marginBottom: 10, fontSize: 12 }}>
            With Steamed Milk
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            <Text style={styles.productPrice}>
              <Text style={{ color: '#D17842' }}>$ </Text> 4.20
            </Text>
            <Pressable style={styles.buttton}>
              <Text style={{ fontSize: Sizes.md, color: colors.primaryColor }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252A32',
    width: 149,
    height: 250,
    marginTop: 20,
    marginRight: 20,
    borderRadius: 25,
    padding: 10,
  },
  productTitle: {
    fontSize: Sizes.sm,
    color: colors.primaryColor,
    marginVertical: 10,
    fontWeight: '700',
  },
  productImage: {
    width: 126,
    height: 126,
    borderRadius: 10,
  },
  productDescription: {
    // width: '85%',
    alignSelf: 'center',
  },
  productPrice: {
    fontWeight: '700',
    fontSize: Sizes.xs,
    color: colors.primaryColor,
  },
  buttton: {
    backgroundColor: '#D17842',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
});
