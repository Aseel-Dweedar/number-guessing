import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import colors from "../constants/colors";
import Card from "./Card";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.chosenNumber));
  const currentMin = useRef(1);
  const currentMax = useRef(100);
  const numberOfRounds = useRef(1);

  useEffect(() => {
    if (currentGuess == props.chosenNumber) {
      props.gameOverHandler(numberOfRounds.current);
    }
  });

  const nextGuess = (direction) => {
    if (
      (props.chosenNumber >= currentGuess && direction === "lower") ||
      (props.chosenNumber <= currentGuess && direction === "higher")
    ) {
      Alert.alert("Incorrect Hint !", "You know that is not correct :)", [{ text: "Sorry!", style: "cancel" }]);
      return;
    }
    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentMin.current = currentGuess;
    }
    setCurrentGuess(generateRandomNumber(currentMin.current, currentMax.current, currentGuess));
    numberOfRounds.current++;
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <View style={styles.holder}>
          <Text style={styles.titleStyle}>Opponent's guess :</Text>
          <View>
            <Text style={styles.chosenNumberStyle}>{currentGuess}</Text>
          </View>
          <View style={styles.buttonsView}>
            <View style={styles.buttons}>
              <Button title="LOWER" color={colors.primary} onPress={nextGuess.bind(this, "lower")} />
            </View>
            <View style={styles.buttons}>
              <Button title="HIGHER" color={colors.primary} onPress={nextGuess.bind(this, "higher")} />
            </View>
          </View>
          <View style={styles.resetButton}>
            <Button title="Start again !" color={colors.secondary} onPress={() => props.startNewGameHandler()} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "center",
  },
  card: {
    width: "90%",
    marginVertical: 30,
  },
  holder: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  chosenNumberStyle: {
    textAlign: "center",
    width: 100,
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 15,
    borderColor: colors.secondary,
    borderWidth: 5,
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    marginBottom: 15,
  },
  buttonsView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    width: "40%",
    marginTop: 20,
  },
  resetButton: {
    width: "100%",
    marginVertical: 30,
  },
});

export default GameScreen;
