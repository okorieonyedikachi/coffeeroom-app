import { SearchNormal1 } from 'iconsax-react-native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Header from '~/components/header';
import ProductList from '~/components/productList';
import { Sizes, colors } from '~/constants/theme';

//makes sure it gets the device width first and applies the width I give any element.
const { width } = Dimensions.get('window');

const coffeeList = ['All ', 'Cappuccino ', 'Espresso ', 'Americano ', 'Macchito'];

export default function Home() {
  return (
    <View style={styles.screenContainer}>
      <Header />
      <View>
        <Text style={styles.homeHeaderText}> Find the best {'\n'}coffee for you </Text>
      </View>
      <View style={styles.searchBar}>
        <SearchNormal1 color="#52555A" />
        <TextInput
          placeholder="Find your coffee"
          placeholderTextColor={colors.greyColor}
          style={{ marginLeft: 8, color: '#52555A', width: '90%' }}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.coffeeListStyle}
        scrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {coffeeList.map((item, index) => (
          <TouchableOpacity key={index}>
            <Text style={styles.coffeeListItems}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ProductList />
      {/* <ScrollView scrollEnabled horizontal showsHorizontalScrollIndicator={false}> */}
      {/* <FlatList
          data={productCoffeeList}
          renderItem={({ item }) => (
            <ProductList
              productTitle={item.productTitle}
              productDescription={item.productDescription}
              productImage={item.productImage}
              productPrice={item.productPrice}
            />
          )}
        /> */}
      {/* <ProductList /> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#0C0F14',
    flex: 1,
    paddingLeft: 18,
  },
  homeHeaderText: {
    fontSize: Sizes.lg,
    color: colors.primaryColor,
    fontWeight: '600',
  },
  searchBar: {
    backgroundColor: '#141921',
    width: '90%',
    marginTop: 18,
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignContent: 'center',
  },
  coffeeListStyle: {
    flexDirection: 'row',
    marginTop: 15,
  },
  coffeeListItems: {
    color: colors.greyColor,
    fontSize: Sizes.sm,
    marginLeft: 20,
    fontWeight: '600',
  },
});
