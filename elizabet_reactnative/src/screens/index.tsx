import {
  faCog,
  faHome,
  faReceipt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import 'react-native';
import 'react-native-gesture-handler';
import useAppContext from '../context';
import {AdminStackScreens} from './Admin';
import {HomeStackScreens} from './Home';
import {MyAccountStackScreens} from './MyAccount';
import {MyGuessStackScreens} from './MyGuesses';
const Tab = createBottomTabNavigator();

const homeIcon = () => {
  return <FontAwesomeIcon icon={faHome} size={25} />;
};
const guessIcon = () => {
  return <FontAwesomeIcon icon={faReceipt} size={25} />;
};
const adminIcon = () => {
  return <FontAwesomeIcon icon={faCog} size={25} />;
};
const MyAccountIcon = () => {
  return <FontAwesomeIcon icon={faUser} size={25} />;
};
export default function AppTabs() {
  const [isAdmin, setAdmin] = useState<boolean>(false);
  const [isLogged, setLogged] = useState<boolean>(false);
  const context = useAppContext();
  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('client');
        if (value !== null) {
          const client = await JSON.parse(value);
          setAdmin(client.permission === 'admin');
          context.setClient(client);
        }
      } catch (error: any) {
        console.error('error: ', error.error);
      }
    })();
  }, []);

  useEffect(() => {
    setAdmin(context.client?.permission === 'admin');
    setLogged(Boolean(context.client));
  }, [context]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Jogos"
          component={HomeStackScreens}
          options={{
            tabBarIcon: homeIcon,
          }}
        />
        {isLogged && (
          <Tab.Screen
            name="Meus Palpites"
            component={MyGuessStackScreens}
            options={{
              tabBarIcon: guessIcon,
            }}
          />
        )}
        {isAdmin && (
          <Tab.Screen
            name="Admin"
            component={AdminStackScreens}
            options={{
              tabBarIcon: adminIcon,
            }}
          />
        )}
        <Tab.Screen
          name="Minha Conta"
          component={MyAccountStackScreens}
          options={{
            tabBarIcon: MyAccountIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
