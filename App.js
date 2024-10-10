import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkoutProvider } from './context/WorkoutContext';
import AddWorkoutScreen from './components/AddWorkoutScreen';
import WorkoutListScreen from './components/WorkoutListScreen';
import SettingsScreen from './components/SettingsScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();

export default function App() {
    // Lataa fontit käyttämällä useFonts-hookkia
    const [fontsLoaded] = useFonts({
      'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    });
  
    if (!fontsLoaded) {
      return null; // Palautetaan null, jos fontteja ei ole vielä ladattu
    }

  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Add Workout"
            component={AddWorkoutScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Workout List"
            component={WorkoutListScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
}