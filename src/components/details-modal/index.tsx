import { Modal, SafeAreaView, Image, View, Text } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { useDispatch, useSelector } from "react-redux";
import { setModalValue } from "../../redux/actions/menu";
import { selectModalValue } from "../../redux/selector/menu";
import colors from "../../styles/colors";
import sizes from "../../styles/sizes";
import { styles } from "./styles";

const DetailsModal = (): JSX.Element | null => {

  const modalValue = useSelector(selectModalValue);
  const dispatch = useDispatch();

  const onClose = (): void => {
    dispatch(setModalValue(null));
  }

  if (!modalValue){
    return null;
  }

  return (
    <GestureRecognizer
      style={{flex: 1}}
      onSwipeDown={ onClose }
    >
      <Modal
        animationType="slide"
        transparent
        statusBarTranslucent
        onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <SafeAreaView style={{flex: 0}}/>
          <View style={styles.container}>
            <Image style={styles.image} source={{uri: modalValue.url}}/>
            <Text style={styles.title}>{modalValue.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{modalValue.price}</Text>
            </View>
            <Text style={styles.description}>{modalValue.description}</Text>
          </View>
        </View>
      </Modal>
    </GestureRecognizer>
  );
};

export default DetailsModal;