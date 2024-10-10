import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, Divider, Avatar, Card } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WorkoutContext } from '../context/WorkoutContext';
import { styles } from '../style';

export default function WorkoutListScreen() {
  const { workouts, unit } = useContext(WorkoutContext);

  const convertDistance = (distance) => {
    if (unit === 'miles') {
      return (distance * 0.621371).toFixed(2);
    } else {
      return distance.toFixed(2);
    }
  };

  const renderWorkout = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.sport}
        subtitle={`${convertDistance(item.distance)} ${unit}, ${item.duration} min, ${item.date}`}
        left={() => (
          <Avatar.Icon size={40} icon={getIcon(item.sport)} style={styles.avatar} />
        )}
      />
    </Card>
  );

  // Laskee urheilusuorituksen kilometrit/mailit yhteensä
  const sumBySport = (sport) => {
    const sum = workouts
      .filter((workout) => workout.sport === sport)
      .reduce((total, workout) => total + (unit === 'miles' ? workout.distance * 0.621371 : workout.distance), 0);
    return sum.toFixed(2);
  };

  const getIcon = (sport) => {
    switch (sport) {
      case 'Running':
        return 'run';
      case 'Cycling':
        return 'bike';
      case 'Swimming':
        return 'swim';
      default:
        return 'run';
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <Divider />}
      />

      <Text style={styles.header}>Workout Summary</Text>

      <View style={styles.summaryContainer}>
        <List.Item
          title={`Running total: ${sumBySport('Running')} ${unit}`}
          left={() => <MaterialCommunityIcons name="run" size={24} color="#6b6a6a" />}
        />
        <Divider />
        <List.Item
          title={`Cycling total: ${sumBySport('Cycling')} ${unit}`}
          left={() => <MaterialCommunityIcons name="bike" size={24} color="#6b6a6a" />}
        />
        <Divider />
        <List.Item
          title={`Swimming total: ${sumBySport('Swimming')} ${unit}`}
          left={() => <MaterialCommunityIcons name="swim" size={24} color="#6b6a6a" />}
        />
      </View>
    </View>
  );
}
