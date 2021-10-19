import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGamePage from "./components/StartGamePage";
import GameScreen from "./components/GameScreen";
import GameOverScreen from "./components/GameOverScreen";

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const startNewGameHandler = (userChoice) => {
    setChosenNumber(userChoice);
    setNumberOfRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setNumberOfRounds(numberOfRounds);
  };

  let content = <StartGamePage startNewGameHandler={startNewGameHandler} />;

  if (numberOfRounds > 0) {
    content = (
      <GameOverScreen
        numberOfRounds={numberOfRounds}
        chosenNumber={chosenNumber}
        startNewGameHandler={startNewGameHandler}
      />
    );
  } else if (chosenNumber) {
    content = (
      <GameScreen
        chosenNumber={chosenNumber}
        startNewGameHandler={startNewGameHandler}
        gameOverHandler={gameOverHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header />
      <StatusBar style="auto" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
