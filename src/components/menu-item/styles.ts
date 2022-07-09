import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.borderRadius1,
    borderWidth: sizes.borderWidth1,
    borderColor: colors.borderGrey
  },
  title: {
    margin: sizes.spacing2,
  },
  image: {
    width: '50%',
    height: '50%',
  },
  text: {
    marginTop: sizes.spacing1,
    textAlign: 'center',
  }
});