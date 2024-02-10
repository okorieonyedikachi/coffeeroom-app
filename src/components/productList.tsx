import { View, Text, Button, StyleSheet } from 'react-native';

import { Sizes, colors } from '~/constants/theme';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <Text style={styles.productTitle}>Cappuccino</Text>
        <Text>With Steamed Milk</Text>
        <View>
          <Text>$ 4.20</Text>
          <Button title="+" />
        </View>
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '50%',
    marginTop: 20,
  },
  productTitle: {
    fontSize: Sizes.md,
    color: colors.primaryColor,
  },
  productImage: {
    width: '80%',
  },
});
