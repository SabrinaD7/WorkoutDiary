import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, Modal, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WorkoutContext } from '../context/WorkoutContext';
import { Calendar } from 'react-native-calendars';
import { styles } from '../style';

export default function AddWorkoutScreen() {
  const { workouts, setWorkouts, unit } = useContext(WorkoutContext);
  const [sport, setSport] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false); // Kalenterin näkyvyyden hallinta

  const selectSport = (sportType) => {
    setSport(sportType);
    setShowDetails(true); // Näytetään kentät, kun laji on valittu
  };

  const addWorkout = () => {
    if (parseFloat(distance) <= 0 || parseFloat(duration) <= 0) {
      Alert.alert('Error', 'Distance and duration must be positive numbers.');
      return;
    }
    setWorkouts([...workouts, { sport, distance: parseFloat(distance), duration: parseFloat(duration), date }]);
    setShowDetails(false); // Piilotetaan kentät treenin lisäämisen jälkeen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add new workout!</Text>

      <View style={styles.iconRow}>
        <Pressable onPress={() => selectSport('Running')}>
          <MaterialCommunityIcons name="run" size={40} color={sport === 'Running' ? 'tomato' : '#333333'} />
          <Text>Running</Text>
        </Pressable>
        <Pressable onPress={() => selectSport('Cycling')}>
          <MaterialCommunityIcons name="bike" size={40} color={sport === 'Cycling' ? 'tomato' : '#333333'} />
          <Text>Cycling</Text>
        </Pressable>
        <Pressable onPress={() => selectSport('Swimming')}>
          <MaterialCommunityIcons name="swim" size={40} color={sport === 'Swimming' ? 'tomato' : '#333333'} />
          <Text>Swimming</Text>
        </Pressable>
      </View>

      {showDetails && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Distance ({unit})</Text>
          <TextInput
            value={distance}
            onChangeText={setDistance}
            keyboardType="numeric"
            style={styles.textInput}
          />

          <Text style={styles.label}>Duration (minutes)</Text>
          <TextInput
            value={duration}
            onChangeText={setDuration}
            keyboardType="numeric"
            style={styles.textInput}
          />
        </View>
      )}

      <Pressable style={styles.calendarButton} onPress={() => setCalendarVisible(true)}>
        <Text style={styles.calendarText}>{date}</Text>
        <MaterialCommunityIcons name="calendar" size={30} color="tomato" />
      </Pressable>


      <Modal
        visible={calendarVisible}
        transparent={true}
        animationType="fade" // Fade-efekti
        onRequestClose={() => setCalendarVisible(false)} // Sulje modal, kun käyttäjä painaa takaisin
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={(day) => {
                setDate(day.dateString); // Aseta uusi päivämäärä
                setCalendarVisible(false); // Sulje modal
              }}
              markedDates={{ [date]: { selected: true } }}
            />
            <Pressable onPress={() => setCalendarVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable style={styles.addButton} onPress={addWorkout}>
        <Text style={styles.addButtonText}>Add Workout</Text>
      </Pressable>
    </View>
  );
}
