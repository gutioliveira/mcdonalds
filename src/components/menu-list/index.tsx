import { View, Text, ScrollView } from 'react-native';
import MenuItem from '../menu-item';
import { styles } from './styles';
import sizes from '../../styles/sizes';

const items = ['xxx', 'yyy', 'zzz', 'xxxx'];

const MenuList = (): JSX.Element => {

  const paddingSize = sizes.spacing1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beverages</Text>
      <ScrollView contentContainerStyle={{paddingLeft: paddingSize}} horizontal>
        {
          items.map((i, index) => <MenuItem paddingSize={paddingSize}/>)
        }
      </ScrollView>
    </View>
  );
};

export default MenuList;