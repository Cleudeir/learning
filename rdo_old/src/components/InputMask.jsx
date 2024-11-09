import {Text} from 'react-native';
import styles from '../../style/MainStyle';
import {TextInputMask} from 'react-native-masked-text';

import React from 'react';

export default function InputMask({placeholder, onChangeText, type, textError, keyboardType, options}) {
	return (
		<>
			<TextInputMask style={styles.containerInput}
				placeholderTextColor="gray"
				leftIcon={{type: 'font-awesome', name: 'lock'}}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
				placeholder={placeholder}
				type={type}
				options={options}
			/>
			{textError && <Text style={{...styles.AutoCompletetextErrorStyle, marginStart: 5}}>
				{textError}
			</Text>}
		</>

	);
}
