import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/AboutMeScreen.js';
import LanguagesScreen from './screens/LanguagesScreen.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="About Me" component={AboutScreen} />
        <Tab.Screen name="Languages" component={LanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

