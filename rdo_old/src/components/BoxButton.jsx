import {View, Text, Dimensions} from 'react-native';
import styles from '../../style/MainStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';

export default function BoxButton({type, onPress, name, color, ico, style}) {
	const tela = ((Dimensions.get('window').width) / 2) - 30;
	if (!color) {
		color = '#3b9833';
	}

	let Tag;
	if (type === 'AntDesign') {
		Tag = AntDesign.Button;
	} else if (type === 'Ionicons') {
		Tag = Ionicons.Button;
	} else if (type === 'MaterialIcons') {
		Tag = MaterialIcons.Button;
	} else if (type === 'MaterialCommunityIcons') {
		Tag = MaterialCommunityIcons.Button;
	} else if (type === 'FontAwesome5') {
		Tag = FontAwesome5.Button;
	} else if (type === 'Entypo') {
		Tag = Entypo.Button;
	}

	return (
		<View style={{...styles.vectorContainer}}>
			<Tag
				style={{...styles.vectorButton, ...style}}
				name={ico}
				backgroundColor={null}
				color={styles.vectorText.color}
				size={40}
				onPress={onPress}>
				<Text style={styles.vectorText}>
					{name.replace('Lanc', 'Lanç')}
				</Text>
			</Tag>
		</View>
	);
}
