import {StyleSheet, Dimensions} from 'react-native';
const width = ((Dimensions.get('window').width) / 2) - 20;
const {height} = Dimensions.get('window');

const color01 = 'rgba(255,255,250,0.3)';
const color02 = 'rgba(35,35,35,1)';
const color03 = 'rgba(0,0,0,1)';
/*
Const color01 = 'rgba(255,255,250,0.3)';
const color02 = 'rgba(10,180,250,1)';
const color03 = 'rgba(10,80,200,.9)';
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	h1: {
		margin: 10,
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: 'center',
		textAlign: 'center',
	},
	h2: {
		margin: 6,
		fontSize: 16,
		textAlignVertical: 'center',
		color: color03,
		fontWeight: 'bold',
	},
	h3: {
		margin: 6,
		fontSize: 16,
		alignItems: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		color: color03,
		fontWeight: 'bold',
	},
	h4: {
		marginLeft: 4,
		marginRight: 4,
		fontSize: 14,
		alignItems: 'center',
		textAlign: 'center',
		textAlignVertical: 'center',
		color: color03,
		fontWeight: 'bold',
	},
	picker: {
		color: '#ffff',
		borderRadius: 5,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: 30,
	},
	viewPicker: {
		backgroundColor: color02,
		justifyContent: 'center',
		textAlign: 'center',
		width: '60%',
		borderRadius: 5,
	},
	containerInfoFuncionario: {
		padding: 5,
		margin: 5,
		flexDirection: 'row',
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
		elevation: 4,
	},
	containerInfo: {
		padding: 3,
		borderRadius: 5,
		margin: 5,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	containerTime: {
		padding: 5,
		margin: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
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
	},
	time: {
		flexDirection: 'row',
	},
	timeButton: {
		backgroundColor: color02,
	},
	containerImg: {
		borderColor: color02,
		borderStyle: 'solid',
		padding: 3,
		borderRadius: 5,
		width: 100,
		height: 120,
		margin: 5,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	img: {
		width: '100%',
		height: '100%',
	},
	containerPicker: {
		fontSize: 18,
		borderColor: color02,
		borderStyle: 'solid',
		borderWidth: 2,
		padding: 2,
		borderRadius: 5,
		textAlign: 'center',
		justifyContent: 'space-between',
		margin: 5,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		backgroundColor: color01,
	},
	LoginInput: {
		fontSize: 18,
		borderColor: '#cccc',
		borderStyle: 'solid',
		borderWidth: 2,
		padding: 5,
		borderRadius: 5,
		textAlign: 'center',
		margin: 5,
		width: '80%',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		margin: 20,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#444',
		height: 50,
	},
	buttonText: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
	boxContainer: {
		flex: 1,
		flexWrap: 'wrap',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
	},
	viewContainer: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	boxScroll: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#ffffff',
		width: '100%',
		height: '100%',
	},
	boxCard: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginTop: 5,
		borderColor: color02,
		borderStyle: 'solid',
		borderBottomWidth: 2,
	},
	vectorContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		margin: 10,
		padding: 0,
		height: 80,
		borderRadius: 5,
	},
	vectorText: {
		color: color03,
		fontSize: 12,
		fontWeight: 'bold',
		textTransform: 'uppercase',
	},
	vectorButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width,
		backgroundColor: color01,
		height: 80,
		flexDirection: 'column',
		borderColor: color02,
		borderStyle: 'solid',
		borderWidth: 2,
		padding: 1,
	},
	title: {
		margin: 0,
		color: 'black',
		padding: 10,
		fontSize: 16,
		width: '100%',
	},
	containerInput: {
		height: 55,
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
		margin: 5,
		fontSize: 16,
		color: 'black',
	},
	AutoCompletecontainer: {
		padding: 5,
	},
	AutoCompleteinput: {
		height: 55,
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
	},
	AutoCompleteinputStyle: {fontSize: 16},
	AutoCompletelabelStyle: {fontSize: 14},
	AutoCompleteplaceholderStyle: {fontSize: 12},
	AutoCompletetextErrorStyle: {fontSize: 16, color: 'red'},
	containerMap: {
		flex: 1, // The container will fill the whole screen.
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 250,
		marginTop: 10,
	},
	map: {
		width: '95%',
		height: 250,
		backgroundColor: 'white',
		paddingHorizontal: 12,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
});

export default styles;
