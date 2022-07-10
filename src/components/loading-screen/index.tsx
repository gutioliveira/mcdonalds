import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';

const LoadingScreen = (): JSX.Element => {
  return (
    <View testID='loading-screen' style={styles.container}>
      <ActivityIndicator size="large"/>
    </View>
  )
};

export default LoadingScreen;