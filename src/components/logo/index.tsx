import { Image } from 'react-native';
import { styles } from './styles';
import logo from '../../../static/images/logo.png';

const Logo = (): JSX.Element => {
  return <Image style={styles.container} source={logo}/>
}

export default Logo;