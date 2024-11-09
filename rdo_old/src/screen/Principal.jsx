import {View, Text, ScrollView, Button, Pressable, TouchableHighlight} from 'react-native';
import styles from '../../style/MainStyle';
import React, {useState, useEffect, useContext} from 'react';
import BoxButton from '../components/BoxButton';
import {Context} from '../contexts/Context';

export default function Principal({navigation}) {
	const {deslogar, obraClique, dataObraPermitida} = useContext(Context);

	useEffect(() => {
		console.log(obraClique);
	}, []);
	return (
		<ScrollView style={styles.boxScroll} contentContainerStyle={{
			flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end', width: '100%',
		}}>
			<View style={styles.viewContainer}>

				<View style={styles.boxCard}>
					<Text style={styles.title}>Obras correntes</Text>
					{dataObraPermitida && dataObraPermitida.map((x, i) => (
						<BoxButton key={i}
							type="Entypo"
							name={x.cidade}
							ico="location"
							onPress={() => {
								console.log('Obra: ', dataObraPermitida[i]);
								obraClique(dataObraPermitida[i].obraId);
								navigation.navigate({
									name: 'Obra',
									params:	dataObraPermitida[i],
								});
							}}

						/>
					))}
				</View>
				<View style={styles.boxCard}>
					<Text style={styles.title}>Gerenciar</Text>
					<BoxButton
						type="MaterialCommunityIcons" name="Adicionar" ico="playlist-plus"
						style={{width: 90, height: 150}}
						onPress={() => {
							navigation.navigate({
								name: 'Adicionar',
							});
						}}
					/>
					<BoxButton
						type="MaterialCommunityIcons" name="Remover"
						style={{width: 90, height: 150}}
						onPress={() => {
							navigation.navigate({
								name: 'Remover',
							});
						}}
						ico="playlist-remove"/>
					<BoxButton
						type="MaterialCommunityIcons" name="Deslogar"
						style={{width: 90, height: 150}}
						onPress={deslogar}
						ico="logout"/>

				</View>
			</View>
		</ScrollView>

	);
}
