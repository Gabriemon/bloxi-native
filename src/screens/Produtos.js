import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function Produtos({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Entrega"
          onPress={() => navigation.navigate('Entrega')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

