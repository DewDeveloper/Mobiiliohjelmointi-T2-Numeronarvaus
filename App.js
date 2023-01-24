import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { react } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [text1, setText1] = useState('Guess a number between 1-100');

  const [inp, setInp] = useState("");

  const [randNum, setRandNum] = useState(0);

  const [generated, setGenerated] = useState(false);

  const [count, setCount] = useState(0);

  if (generated == false) {
    var numero = (Math.floor(Math.random() * 100) + 1);
    setRandNum(numero);
    setGenerated(true);
  }

  function check() {
    setCount(count + 1);
    var intGuess = parseInt(inp);
    if (intGuess == randNum) {
      Alert.alert("You guessed the number in " + count + " guesses");
    } 
    else if (intGuess <= randNum) {
      setText1("Your guess " + intGuess + " is too low");
    }
    else {
      setText1("Your guess " + intGuess + " is too high")
    }
  }

  return (
    <View style={styles.container}>
      
      <Text>{text1}</Text>

      <TextInput
        style={styles.input}
        onChangeText={setInp}
        value={inp}
        keyboardType="numeric"
      />

      <Button
        style={styles.button}
        title="MAKE GUESS"
        color="blue"
        onPress={check}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 150,
    margin: 5,
    borderWidth: 2,
    padding: 5,
  },
  button: {
    height: 20,
    width: 50,
    justifyContent: "center",
    padding: 150,
  },
});
