import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: sizes.borderWidth1,
  },
  image: {
    width: 50,
    height: 50,
  },
});