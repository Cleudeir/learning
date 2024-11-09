import {View, Text} from 'react-native';
import styles from '../../../../style/MainStyle';
import BoxButton from '../../../components/BoxButton';
import React, {useContext} from 'react';
import {Context} from '../../../contexts/Context';
export default function Lancamento({navigation}) {
	const {dataFrente} = useContext(Context);
	return (
		<View style={styles.boxContainer}>
			<View style={styles.viewContainer}>
				{dataFrente && dataFrente.map((x, i) =>
					<BoxButton key={i} type="MaterialIcons" name={x.frenteNome}
						ico="place" onPress={() => {
							navigation.navigate({
								name: 'Rdo',
								params:	x,
							});
						}}/>,
				)}
			</View>
		</View>

	);
}
