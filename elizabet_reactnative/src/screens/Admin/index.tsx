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
import AdminHomeScreen from './stacks';
import ClientsScreen from './stacks/Clients';
import MatchesScreen from './stacks/Matches';
import GuessesMatch from './stacks/Matches/AllGuesses';
import EditMatch from './stacks/Matches/EditMatch';
import SetMatchScore from './stacks/Matches/SetMatchScore/index';
import WinnersMatch from './stacks/Matches/Winners';
import NewMatch from './stacks/NewMatch';

const Stack = createStackNavigator();

export const AdminStackScreens = () => {
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
      <Stack.Screen name="Administrator" component={AdminHomeScreen as any} />
      <Stack.Screen name="Login" component={LoginScreen as any} />
      <Stack.Screen name="SignUp" component={SignUpScreen as any} />
      <Stack.Screen name="Remember" component={RememberScreen as any} />
      <Stack.Screen name="NewMatch" component={NewMatch as any} />
      <Stack.Screen name="Matches" component={MatchesScreen as any} />
      <Stack.Screen name="EditMatch" component={EditMatch as any} />
      <Stack.Screen name="SetMatchScore" component={SetMatchScore as any} />
      <Stack.Screen name="WinnersMatch" component={WinnersMatch as any} />
      <Stack.Screen name="Clients" component={ClientsScreen as any} />
      <Stack.Screen name="GuessesMatch" component={GuessesMatch as any} />
    </Stack.Navigator>
  );
};
