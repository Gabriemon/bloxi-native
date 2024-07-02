import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Entrega({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Vá para pagamento"
          onPress={() => navigation.navigate('Pagamento')}
        />
        <Button title="Go back" onPress={() => navigation.goBack('Produtos')} />
      </View>
    );
  }


