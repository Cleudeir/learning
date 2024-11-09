import {Dimensions, Platform} from 'react-native';
let width = 310;
const window = Dimensions.get('window');

if (window.width < 360) {
  width = 260;
}
if (window.width < 480 && window.width > 360) {
  width = 320;
}
if (window.width > 480) {
  width = 400;
}

console.log(width);

export const global = {
  backGround: '#37e',
  text: '#fff',
  width,
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width,
    height: 'auto',
    margin: 5,
  },
  height: window.height,
};
