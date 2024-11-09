import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: width * 0.05,
    width: width * 0.3,
    height: 30,
    justifyContent: 'center',
  },
});

export function ButtonBack() {
  return (
    <View style={style.container}>
      <FontAwesomeIcon icon={faChevronLeft} color="#000" size={width * 0.07} />
    </View>
  );
}

export function ButtonBackNavigate(navigation: any, screen: string) {
  return (
    <Pressable
      style={style.container}
      onPress={() => navigation.navigate(screen)}>
      <FontAwesomeIcon icon={faChevronLeft} color="#000" size={width * 0.07} />
    </Pressable>
  );
}
