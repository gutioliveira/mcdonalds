import { SafeAreaView, Image } from 'react-native';
import { styles } from './styles';
import logo from '../../../static/images/logo.png';

const LogoHeader = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={logo}/>
    </SafeAreaView>
  )
}

export default LogoHeader;