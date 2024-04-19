import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginpage from './screens/loginpage';
import emergency from './screens/emergency';
import notificationreminder from './screens/notificationreminder';
import games from './screens/games' ;
import Pharmacy from './screens/Pharmacy';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={loginpage} />
        <Stack.Screen name="Medication Reminder" component={notificationreminder} />
        <Stack.Screen name="emergency" component={emergency} />
        <Stack.Screen name="games"  component={games} />
        <Stack.Screen name="Pharmacy" component={Pharmacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
