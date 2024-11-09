import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TransformDate from '../../../../utils/TransformDate';

interface Client {
  clientId: number;
  email: string;
  pixKey: string;
  permission: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CardProps {
  client: Client;
}

const Card: React.FC<CardProps> = ({client}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>ID: {client.clientId}</Text>
      <Text style={styles.text}>Email: {client.email}</Text>
      <Text style={styles.text}>Chave Pix: {client.pixKey}</Text>
      <Text style={styles.text}>Permissão: {client.permission}</Text>
      <Text style={styles.text}>Criado: {TransformDate(client.createdAt)}</Text>
      <Text style={styles.text}>
        Atualizado: {TransformDate(client.updatedAt)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    margin: 8,
  },
  text: {
    color: 'black',
  },
});

export default Card;
