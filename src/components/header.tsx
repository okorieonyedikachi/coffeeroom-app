import { Menu, Profile } from 'iconsax-react-native';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Sizes, colors } from '~/constants/theme';

export interface headerProps {
  pageTitle?: string;
}

const Header = ({ pageTitle }: headerProps) => {
  return (
    //edges [top and bottom]: makes sure it is responsive on all devices.
    <SafeAreaView style={styles.headerContainer} edges={['top', 'bottom']}>
      <View>
        <Menu color={colors.primaryColor} />
      </View>
      <View>
        <Text style={styles.headerText}>{pageTitle}</Text>
      </View>
      <View>
        <Profile color={colors.primaryColor} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  headerText: {
    color: colors.primaryColor,
    fontSize: Sizes.md,
  },
});

export default Header;
