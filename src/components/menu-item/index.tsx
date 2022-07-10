import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setModalValue } from '../../redux/actions/menu';
import { styles } from './styles';
import { Props } from './types';

const MenuItem = ({item}: Props): JSX.Element => {

  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity testID='menu-item-touchable' onPress={() => dispatch(setModalValue(item))}>
        <View style={styles.container}>
          <Image 
            style={styles.image}
            source={{uri: item.url}}/>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

export default MenuItem;