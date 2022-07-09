import { View, Text, FlatList } from 'react-native';
import MenuItem from '../menu-item';
import { styles } from './styles';
import sizes from '../../styles/sizes';
import { Props } from './types';

const MenuList = ({items, title} : Props): JSX.Element => {

  const paddingSize = sizes.spacing2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        contentContainerStyle={{paddingLeft: paddingSize}} 
        horizontal 
        renderItem={({item, index}) =>
          <MenuItem
            item={item}
            paddingSize={paddingSize}/>
        }
        data={items}/>
    </View>
  );
};

export default MenuList;