import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import Card from "./Card";
import colors from "../constants/colors";
import StartModal from "./StartModal";

const StartGamePage = (props) => {
  const [inputNumber, setInputNumber] = useState("");
  const [confirmSelection, setConfirmSelection] = useState(false);
  const [chosenNumber, setChosenNumber] = useState("");

  const getInputText = (num) => {
    setInputNumber(num.replace(/[^0-9]/g, ""));
  };

  const resetInputButton = () => {
    setInputNumber("");
    setConfirmSelection(false);
  };

  const confirmInputButton = () => {
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid Number !", "Please enter s number between 1-99", [
        { text: "Ok", style: "destructive", onPress: resetInputButton },
      ]);
      return;
    }
    setConfirmSelection(true);
    setChosenNumber(inputNumber);
    setInputNumber("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.titleStyle}>Start A New Game !</Text>
        <Card style={styles.inputContainer}>
          <Text>Choose a number !</Text>
          <TextInput
            onChangeText={getInputText}
            value={inputNumber}
            style={styles.inputStyle}
            placeholder="Enter a number"
            keyboardType="number-pad"
            maxLength={2}
          />
          <View style={styles.buttons}>
            <View style={styles.buttonStyle}>
              <Button title="Confirm" color={colors.primary} onPress={confirmInputButton} />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Reset" color={colors.secondary} onPress={resetInputButton} />
            </View>
          </View>
        </Card>
        {confirmSelection && <StartModal chosenNumber={chosenNumber} startNewGameHandler={props.startNewGameHandler} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    margin: 30,
    // justifyContent: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 15,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "35%",
    height: 30,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    textAlign: "center",
    marginVertical: 10,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  buttonStyle: {
    width: "40%",
  },
});

export default StartGamePage;
