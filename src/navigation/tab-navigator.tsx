import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { Heart, Home2, Notification, ShoppingBag } from 'iconsax-react-native';
import { StyleSheet } from 'react-native';

import { RootStackParamList } from '.';

import Cart from '~/screens/cart';
import Favourites from '~/screens/favourites';
import History from '~/screens/history';
import Home from '~/screens/home';

const Tab = createBottomTabNavigator();

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>;

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarStyle: { paddingTop: 20, backgroundColor: '#1E1E1E', borderTopWidth: 0 },
        headerStyle: { backgroundColor: '#1E1E1E', borderTopWidth: 0 },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Home2 color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <ShoppingBag color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourites}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Heart color={color} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Notification color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   headerRight: {
//     marginRight: 15,
//   },
//   tabBarIcon: {
//     marginBottom: -3,
//   },
//   tabBar: {
//     marginTop: 4,
//   },
// });
