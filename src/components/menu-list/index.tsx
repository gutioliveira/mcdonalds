import { View, Text, ScrollView } from 'react-native';
import MenuItem from '../menu-item';
import { styles } from './styles';
import sizes from '../../styles/sizes';
import { Item } from '../../types/item';

// const items = ['xxx', 'yyy', 'zzz', 'xxxx'];

const MenuList = ({items, title}): JSX.Element => {

  const paddingSize = sizes.spacing2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView contentContainerStyle={{paddingLeft: paddingSize}} horizontal>
        {
          items.map((i: Item, index) => <MenuItem item={i} paddingSize={paddingSize}/>)
        }
      </ScrollView>
    </View>
  );
};

export default MenuList;