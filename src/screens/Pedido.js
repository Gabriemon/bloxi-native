import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function Pedido({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack('Genero')} />
      </View>
    );
  }

