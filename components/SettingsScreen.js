import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { WorkoutContext } from '../context/WorkoutContext';
import { styles } from '../style';

export default function SettingsScreen() {
  const { unit, setUnit } = useContext(WorkoutContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Units</Text>
      <RadioButton.Group onValueChange={(value) => setUnit(value)} value={unit}>
        <RadioButton.Item label="Kilometers" value="kilometers" color="tomato"/>
        <RadioButton.Item label="Miles" value="miles" color= "tomato"/>
      </RadioButton.Group>
    </View>
  );
}
