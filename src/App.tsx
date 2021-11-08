import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Details from './pages/Details';
import {StatusBar} from 'react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#1f1c2c" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
