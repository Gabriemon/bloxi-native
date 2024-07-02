import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function Pagamento({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button
          title="Pedido"
          onPress={() => navigation.navigate('Pedido')}
        />
        <Button title="Go back" onPress={() => navigation.goBack('Entrega')} />
      </View>
    );
  }

