import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width; //full width
const height = Dimensions.get('screen').height; //full height
//console.log(width, height);
const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: width * 0.04,
    width: '100%',
    height: '100%',
  },
  h85: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: width * 0.085,
  },
  h75: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: width * 0.075,
  },
  h60: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: width * 0.06,
  },
  h55: {
    color: '#000',
    fontWeight: '600',
    fontSize: width * 0.055,
  },
  h50: {
    color: '#000',
    fontWeight: '600',
    fontSize: width * 0.05,
  },
  h40: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: width * 0.04,
    marginHorizontal: 5,
  },
  h35: {
    color: '#000',
    fontWeight: '600',
    fontSize: width * 0.035,
  },
  h30: {
    color: '#000',
    fontWeight: '600',
    fontSize: width * 0.03,
  },
  HighPadding: {
    marginVertical: width * 0.05,
  },
  picker: {
    color: 'black',
    marginLeft: -width * 0.038,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  Bold: {
    fontWeight: 'bold',
  },
  right: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
  },
  center: {
    alignSelf: 'center',
  },
  ButtonContainer: {
    backgroundColor: '#e0264f',
    width: '100%',
    paddingVertical: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: width * 0.04,
  },
  ButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: width * 0.038,
    textTransform: 'uppercase',
  },
  form: {
    marginVertical: 20,
    width: '100%',
  },
  input: {
    height: 50,
    color: '#000',
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white',
    paddingLeft: width * 0.038,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  label: {
    fontSize: width * 0.045,
    fontWeight: '300',
    alignSelf: 'flex-start',
    color: '#222',
    marginBottom: 5,
  },
  containerTextBottom: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#000',
  },
  Colum2: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  column2Children: {
    flexDirection: 'column',
    width: '45%',
  },
});
export default globalStyle;
