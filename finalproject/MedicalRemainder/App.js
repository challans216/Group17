import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SubscriptionDeliveryPage from './pages/SubscriptionDeliveryPage';
import EmergencyMedicinePage from './pages/EmergencyMedicinePage';
import AyurvedicTipsPage from './pages/AyurvedicTipsPage';
import HealthGamesPage from './pages/HealthGamesPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
        <Stack.Screen name="SubscriptionDelivery" component={SubscriptionDeliveryPage} options={{ title: 'Medicine Delivery' }} />
        <Stack.Screen name="EmergencyMedicine" component={EmergencyMedicinePage} options={{ title: 'Emergency Medicine' }} />
        <Stack.Screen name="AyurvedicTips" component={AyurvedicTipsPage} options={{ title: 'Ayurvedic Health Tips' }} />
        <Stack.Screen name="HealthGames" component={HealthGamesPage} options={{ title: 'Health-Related Games' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
