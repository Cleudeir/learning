/**
 * @format
 */

import {createStackNavigator} from '@react-navigation/stack';
import 'react-native';
import 'react-native-gesture-handler';

import {ButtonBack} from '../../components/ButtonBack';
import LoginScreen from '../_Commons/auth/Login';
import SignUpScreen from '../_Commons/auth/SignUp';
import RememberScreen from '../_Commons/auth/remember';
import MyGuesses from './stacks';

const Stack = createStackNavigator();

export const MyGuessStackScreens = () => {
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
      <Stack.Screen name="MyGuesses" component={MyGuesses as any} />
      <Stack.Screen name="Login" component={LoginScreen as any} />
      <Stack.Screen name="SignUp" component={SignUpScreen as any} />
      <Stack.Screen name="Remember" component={RememberScreen as any} />
    </Stack.Navigator>
  );
};
