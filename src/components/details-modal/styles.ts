import { ScaledSheet, vs } from 'react-native-size-matters';
import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const styles = ScaledSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBackground
  },
  container: {
    flex: 1,
    backgroundColor: colors.whiteBackground,
    overflow: 'hidden',
    borderTopLeftRadius: sizes.borderRadius2,
    borderTopRightRadius: sizes.borderRadius2,
    paddingTop: sizes.spacing3,
    alignItems: 'center'
  },
  image: {
    height: vs(213),
    width: '100%',
    marginTop: sizes.spacing4
  },
  title: {
    fontSize: sizes.title1, 
    fontWeight: 'bold',
    marginTop: sizes.titleSpacing4,
    marginBottom: sizes.titleSpacing2
  },
  description: {
    marginVertical: sizes.titleSpacing2,
    marginHorizontal: sizes.spacing3,
    textAlign: 'center',
    fontSize: sizes.text2
  },
  priceContainer: {
    paddingHorizontal: sizes.smallSpacing2,
    paddingVertical: sizes.smallSpacing1,
    borderWidth: sizes.borderWidth2,
    borderRadius: sizes.borderRadiusMax,
    borderColor: 'black',
  },
  priceText: {
    fontWeight: 'bold',
  }
});