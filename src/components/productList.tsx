import { Link } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

import { Sizes, colors } from '~/constants/theme';

export interface productListProps {
  productTitle?: string;
  productDescription?: string;
  productPrice?: number;
  productImage?: any;
  data?: any[];
}

const ProductList = ({
  productTitle,
  productPrice,
  productDescription,
  productImage,
  data,
}: productListProps) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
              <Image source={item.productImage} style={styles.productImage} />
            </View>
            <View>
              <Text style={styles.productTitle}>{item.productTitle}</Text>
              <Text style={{ color: colors.primaryColor, marginBottom: 10, fontSize: 12 }}>
                {item.productDescription}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  alignItems: 'center',
                }}>
                <Text style={styles.productPrice}>
                  <Text style={{ color: colors.mintColor }}>$ </Text> {item.productPrice}
                </Text>
                <Pressable style={styles.buttton}>
                  <Text style={{ fontSize: Sizes.md, color: colors.greyColor }}>+</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      />
    </View>
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
  productPrice: {
    fontWeight: '700',
    fontSize: Sizes.xs,
    color: colors.primaryColor,
  },
  buttton: {
    backgroundColor: colors.mintColor,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
});
