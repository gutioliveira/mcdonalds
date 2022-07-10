import { View } from 'react-native';
import { Props } from './types';

const FillerView = ({width, height}: Props): JSX.Element => {
  return <View testID='filler-view-id' style={{width, height}}/>
};

export default FillerView;