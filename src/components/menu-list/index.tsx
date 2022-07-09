import { View, Text, ScrollView, FlatList } from 'react-native';
import MenuItem from '../menu-item';
import { styles } from './styles';
import sizes from '../../styles/sizes';

const MenuList = ({items, title}): JSX.Element => {

  const paddingSize = sizes.spacing2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList style={{paddingLeft: paddingSize}} horizontal renderItem={({item}) => <MenuItem item={item} paddingSize={paddingSize}/>} data={items}/>
    </View>
  );
};

export default MenuList;