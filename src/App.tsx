import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoHeader from './components/logo-header';
import HomeScreen from './screens/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => <LogoHeader/> }} name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}