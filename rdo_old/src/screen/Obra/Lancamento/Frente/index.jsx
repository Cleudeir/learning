import {View, Text} from 'react-native';
import styles from '../../../../../style/MainStyle';
import BoxButton from '../../../../components/BoxButton';
import React, {useContext} from 'react';
import {Context} from '../../../../contexts/Context';
export default function Rdo({navigation, route}) {
	const ctx = useContext(Context);
	const {params} = route;
	console.log(params);
	return (

		<View style={styles.boxContainer}>
			<Text style={styles.title}>
				{ params.frenteNome}
			</Text>
			<View style={styles.viewContainer}>
				<BoxButton type="MaterialCommunityIcons" name="Equipamento"
					ico="card-account-details-outline" onPress={() => {
						navigation.navigate({
							name: 'Rdo Equipamento',
							params,
						});
					}}/>
				<BoxButton type="MaterialIcons" name="Funcionario"
					ico="place" onPress={() => {
						navigation.navigate({
							name: 'Rdo Funcionario',
							params,
						});
					}}/>
			</View>
		</View>

	);
}
