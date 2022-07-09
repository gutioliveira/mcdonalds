import { ScaledSheet, vs } from 'react-native-size-matters';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: vs(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.borderGrey,
    borderBottomWidth: sizes.borderWidth1,
  },
  image: {
    width: vs(50),
    height: vs(50),
  },
});