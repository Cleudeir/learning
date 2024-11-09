import * as React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MD2Colors} from 'react-native-paper';
import PopUp from './PopUp';

const height = Dimensions.get('screen').height; //full height

interface ContainerScreenProps {
  isLoading: boolean;
  isMessage: string | null;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
  children: React.ReactNode;
}

const ContainerScreen: React.FC<ContainerScreenProps> = ({
  children,
  isLoading,
  isMessage,
  setMessage,
}): JSX.Element => {
  const [visible, setVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
    setVisible(Boolean(isMessage));
  }, [isMessage]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.containerScroll}
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? height * 0.08 : height * 0.1
        }>
        <ScrollView>
          {isLoading && children}
          {!isLoading && (
            <ActivityIndicator
              size={50}
              style={styles.loading}
              animating={true}
              color={MD2Colors.blue900}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      {visible && <PopUp setMessage={setMessage} text={isMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2 + 200,
  },
  ContainerMessage: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height,
  },
  message: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  messageText: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    textTransform: 'uppercase',
    elevation: 2,
  },
});

export default ContainerScreen;
