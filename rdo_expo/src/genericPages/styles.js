
import {StyleSheet} from 'react-native';
import {global} from '../style/global';

export const styles = StyleSheet.create({
  container: global.container,
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    minHeight: 200,
  },
  iconsContainer: global.iconsContainer,
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textTransform: 'uppercase',
    marginTop: 10,
  },

});
