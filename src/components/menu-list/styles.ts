import { ScaledSheet } from 'react-native-size-matters';
import sizes from '../../styles/sizes';

export const styles = ScaledSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginLeft: sizes.titleSpacing1,
    marginTop: sizes.titleSpacing3,
    marginBottom: sizes.titleSpacing2,
    fontWeight: 'bold',
    fontSize: sizes.title2
  }
});