import { Modal, SafeAreaView, View, TouchableWithoutFeedback } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setModalValue } from "../../redux/actions/menu";
import { selectModalValue } from "../../redux/selector/menu";

const DetailsModal = (): JSX.Element => {

  const modalValue = useSelector(selectModalValue);
  const dispatch = useDispatch();

  const onClose = (): void => {
    dispatch(setModalValue(null));
  }

  return (
    <Modal
      animationType="slide"
      visible={!!modalValue}
      // visible={false}
      transparent
      statusBarTranslucent
      onRequestClose={onClose}>
      <SafeAreaView style={{flex: 0}}/>
      <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Modal>
  )
};

export default DetailsModal;