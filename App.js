import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Genero from './src/screens/Genero';
import Idade from './src/screens/Idade';
import Produtos from './src/screens/Produtos';
import Pagamento from './src/screens/Pagamento';
import Entrega from './src/screens/Entrega';
import Pedido from './src/screens/Pedido';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Genero" component={Genero} />
      <Stack.Screen name="Idade" component={Idade} />
      <Stack.Screen name="Produtos" component={Produtos} />
      <Stack.Screen name="Entrega" component={Entrega} />
      <Stack.Screen name="Pagamento" component={Pagamento} />
      <Stack.Screen name="Pedido" component={Pedido} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
