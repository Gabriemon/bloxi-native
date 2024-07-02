import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Genero({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Vá para a idade"
          onPress={() => navigation.navigate('Idade')}
        />
      </View>
    );
  }


