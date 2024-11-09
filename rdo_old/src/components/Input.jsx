import {View} from 'react-native';
import styles from '../../style/MainStyle';
import {TextInput} from 'react-native-element-textinput';

import React from 'react';

export default function Input({placeholder, onChangeText, textError, keyboardType, style}) {
	return (
		<View style={styles.AutoCompletecontainer}>
			<TextInput
				style={{...styles.AutoCompleteinput, ...style}}
				inputStyle={styles.AutoCompleteinputStyle}
				labelStyle={styles.AutoCompletelabelStyle}
				placeholderStyle={styles.AutoCompleteplaceholderStyle}
				textErrorStyle={styles.AutoCompletetextErrorStyle}
				leftIcon={{type: 'font-awesome', name: 'lock'}}
				placeholderTextColor="gray"

				placeholder={placeholder}
				onChangeText={e => {
					onChangeText(e);
				}}
				textError= {textError}
				keyboardType={keyboardType}
			/>
		</View>

	);
}
