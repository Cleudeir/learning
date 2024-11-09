import {View, Pressable, Text} from 'react-native';
import styles from '../../../style/MainStyle';
import BoxButton from '../../components/BoxButton';
import React, {useContext} from 'react';
import {Context} from '../../contexts/Context';

export default function Obra({navigation, route}) {
	const ctx = useContext(Context);
	const {params} = route;
	return (
		<View style={styles.boxContainer}>
			<Text style={styles.title}>
				{ params.cidade}
			</Text>
			<View style={styles.viewContainer}>
				<BoxButton type="AntDesign" name="Cadastrar"
					ico="adduser" onPress={() => {
						navigation.navigate({
							name: 'Cadastrar',
						});
					}}/>
				<BoxButton type="AntDesign" name="Lancamento"
					ico="addfile" onPress={() => {
						navigation.navigate({
							name: 'Lancamento',
						});
					}}/>
				<BoxButton type="Ionicons" name="Relatorio"
					ico="document-text-outline"
					onPress={() => {
						navigation.navigate({
							name: 'Relatorio',
						});
					}}
				/>
			</View>
		</View>

	);
}

