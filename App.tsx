
// Import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

// App feature
export default function App() {
  const [age, setAge] = useState<string>('20');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Heart Rate Limits Calculator
      </Text>

      <Text style={styles.label}>
        Enter your age:
      </Text>

      {/* Text input */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        defaultValue="20"
      />

      <Text style={styles.result}>
        Lower limit: 130.00 bpm
      </Text>

      <Text style={styles.result}>
        Upper limit: 170.00 bpm
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // StyleSheet
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    width: 90,
    height: 50,
    padding: 10,
    fontSize: 18,
    marginBottom: 30,
  },
  result: {
    fontSize: 16,
    marginBottom: 5,
  },
});
