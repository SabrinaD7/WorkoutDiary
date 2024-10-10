import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e2dede',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'tomato',
  },
  summaryContainer: {
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: 'tomato',
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  calendarText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: 16,
    color: '#333333',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Puoliksi läpinäkyvä tausta
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxWidth: 400,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'tomato',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'tomato',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
