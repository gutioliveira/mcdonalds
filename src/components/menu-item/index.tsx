import { View } from 'react-native';
import { dimensions } from '../../styles/sizes';
import { styles } from './styles';
import { Props } from './types';

const MenuItem = ({paddingSize}: Props): JSX.Element => {

  const itemWidth = (dimensions.width - paddingSize)/2.6;

  return (
    <View style={[styles.container, {width: itemWidth, height: itemWidth, marginRight: paddingSize/1.5}]}></View>
  );
}

export default MenuItem;