import { Dimensions } from "react-native"
import { vs } from 'react-native-size-matters';

export const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export default {
  borderWidth1: vs(0.5),
  borderWidth2: vs(1),
  spacing1: vs(16),
  spacing2: vs(22),
  spacing3: vs(30),
  spacing4: vs(51),
  titleSpacing1: vs(19),
  titleSpacing2: vs(21),
  titleSpacing3: vs(26),
  titleSpacing4: vs(48),
  smallSpacing1: vs(7),
  smallSpacing2: vs(25),
  borderRadius1: vs(2.5),
  borderRadius2: vs(30),
  borderRadiusMax: vs(50),
  title1: vs(24),
  title2: vs(36),
  text1: vs(12),
  text2: vs(16),
  fontWeight1: '400',
  fontWeight2: '700',
}