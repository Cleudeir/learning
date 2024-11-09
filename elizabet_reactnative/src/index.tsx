/**
 * @format
 */

import 'react-native';
import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {AppWrapper} from './context';
import AppTabs from './screens';
import useIndex from './useIndex';

export const App = () => {
  // initial push Notification
  useIndex();
  //---

  return (
    <AppWrapper>
      <AppTabs />
    </AppWrapper>
  );
};

AppRegistry.registerComponent('ElizaBet', () => App);
