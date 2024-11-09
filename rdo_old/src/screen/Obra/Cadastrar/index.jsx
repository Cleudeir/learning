import {View, Text} from 'react-native';
import styles from '../../../../style/MainStyle';
import BoxButton from '../../../components/BoxButton';
import React, {useContext} from 'react';
import {Context} from '../../../contexts/Context';
export default function Cadastro({navigation}) {
	const ctx = useContext(Context);
	return (

		<View style={styles.boxContainer}>
			<View style={styles.viewContainer}>
				<BoxButton type="Ionicons" name="Empresa"
					ico="home-outline" onPress={() => {
						navigation.navigate({
							name: 'Empresa',
						});
					}}/>
				<BoxButton type="FontAwesome5" name="Equipamento"
					ico="tractor" onPress={() => {
						navigation.navigate({
							name: 'Equipamento',
						});
					}}/>
				<BoxButton type="MaterialCommunityIcons" name="Colaborador"
					ico="card-account-details-outline" onPress={() => {
						navigation.navigate({
							name: 'Colaborador',
						});
					}}/>
				<BoxButton type="MaterialIcons" name="Frente"
					ico="place" onPress={() => {
						navigation.navigate({
							name: 'Frente',
						});
					}}/>
				<BoxButton type="AntDesign" name="Escopo"
					ico="profile" onPress={() => {
						navigation.navigate({
							name: 'Escopo',
						});
					}}/>
			</View>
		</View>

	);
}
