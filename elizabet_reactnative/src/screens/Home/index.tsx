/**
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import 'react-native';
import 'react-native-gesture-handler';
import {ButtonBack, ButtonBackNavigate} from '../../components/ButtonBack';
import LoginScreen from '../_Commons/auth/Login';
import SignUpScreen from '../_Commons/auth/SignUp';
import RememberScreen from '../_Commons/auth/remember';
import HomeScreen from './stacks';
import GuessScreen from './stacks/Guess';
import PaymentScreen from './stacks/Payment';

const Stack = createStackNavigator();

export const HomeStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        animationEnabled: false,
        headerBackImage: ButtonBack,
        title: 'ElizaBET',
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={HomeScreen as any} />
      <Stack.Screen name="Guess" component={GuessScreen as any} />
      <Stack.Screen name="Login" component={LoginScreen as any} />
      <Stack.Screen name="Remember" component={RememberScreen as any} />
      <Stack.Screen name="SignUp" component={SignUpScreen as any} />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen as any}
        options={({navigation}: any) => {
          return {
            headerLeft: () => ButtonBackNavigate(navigation, 'Guess'),
          };
        }}
      />
    </Stack.Navigator>
  );
};
