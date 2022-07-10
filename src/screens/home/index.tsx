import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DetailsModal from '../../components/details-modal';
import FillerView from '../../components/filler-view';
import LoadingScreen from '../../components/loading-screen';
import MenuList from '../../components/menu-list';
import { fetchMenu } from '../../redux/actions/menu';
import { selectLoading, selectMenu } from '../../redux/selector/menu';
import sizes from '../../styles/sizes';
import { styles } from './styles';

const HomeScreen = (): JSX.Element => {

  const dispatch = useDispatch();
  const menu = useSelector(selectMenu);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  return (
    <View style={styles.container}>
      {
        loading ? 
          <LoadingScreen/>
          :
          <FlatList 
            data={menu.menus}
            renderItem={({item, index}) => 
              <>
                <MenuList title={item.name} items={item.items}/>
                {index === menu.menus.length-1 && <FillerView height={sizes.spacing2}/>}
              </>
            }/>
      }
      <DetailsModal />
    </View>
  )
};

export default HomeScreen;