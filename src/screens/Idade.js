import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function Idade({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Vá para produtos"
          onPress={() => navigation.navigate('Produtos')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

