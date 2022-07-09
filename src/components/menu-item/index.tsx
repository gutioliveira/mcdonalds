import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setModalValue } from '../../redux/actions/menu';
import { dimensions } from '../../styles/sizes';
import FillerView from '../filler-view';
import { styles } from './styles';
import { Props } from './types';

const MenuItem = ({paddingSize, item}: Props): JSX.Element => {

  const itemWidth = (dimensions.width - paddingSize)/2.6;
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity onPress={() => dispatch(setModalValue(item))}>
        <View style={[styles.container, {width: itemWidth, height: itemWidth}]}>
          <Image style={styles.image} source={{uri: item.url}}/>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <FillerView width={paddingSize/1.5}/>
    </>
  );
}

export default MenuItem;