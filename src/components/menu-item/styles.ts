import { ScaledSheet } from 'react-native-size-matters';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: sizes.borderRadius1,
    borderWidth: sizes.borderWidth1,
    borderColor: colors.borderGrey,
    width: '160@vs',
    height: '160@vs',
    marginRight: sizes.spacing1,
  },
  title: {
    margin: sizes.spacing2,
  },
  image: {
    width: '100@vs',
    height: '100@vs',
  },
  text: {
    paddingTop: sizes.spacing1,
    textAlign: 'center',
    flex: 1,
    fontSize: sizes.text1,
  }
});