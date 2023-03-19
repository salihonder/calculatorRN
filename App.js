// Imports
import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';

// Components
import Header from './src/components/Header';

// Screens
import ButtonsArea from './src/screens/ButtonsArea';
import CalculationScreen from './src/screens/CalculationScreen';

// App
const App = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <CalculationScreen
        output={output}
        input={input}
      />
      <ButtonsArea setInput={setInput} setOutput={setOutput} />
    </SafeAreaView>
  );
}

// Style
const Styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "rgba(74, 66, 66, 0.75)",
    paddingHorizontal: 24
  },
  button: {
    height: 60,
    backgroundColor: 'blue',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default App;