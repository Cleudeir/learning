import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Alert, LogBox, PermissionsAndroid} from 'react-native';

export default function useIndex() {
  LogBox.ignoreAllLogs();

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('remoteMessage:----------------- \n ', remoteMessage);
      Alert.alert(
        String(remoteMessage.notification?.title),
        String(remoteMessage.notification?.body),
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      },
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onTokenRefresh(token => {
      console.log('Refresh FCM Token:', token);
    });
    return unsubscribe;
  }, []);
}
