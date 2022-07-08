import { View, Text } from 'react-native';
import Logo from '../../components/logo-header';
import { styles } from './styles';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text>Open up App.tsx to start working on your app! 2</Text>
    </View>
  )
};

export default HomeScreen;