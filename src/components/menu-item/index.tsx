import { View, Image, Text } from 'react-native';
import { dimensions } from '../../styles/sizes';
import { styles } from './styles';
import { Props } from './types';

const MenuItem = ({paddingSize, item}: Props): JSX.Element => {

  const itemWidth = (dimensions.width - paddingSize)/2.6;

  return (
    <View style={[styles.container, {width: itemWidth, height: itemWidth, marginRight: paddingSize/1.5}]}>
      <Image style={styles.image} source={{uri: item.url}}/>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
}

export default MenuItem;