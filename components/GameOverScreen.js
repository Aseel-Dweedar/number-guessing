import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import colors from "../constants/colors";
import Card from "./Card";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.headText}>The Game Was Over !</Text>
      <Card style={styles.card}>
        <View style={styles.holder}>
          <Text style={styles.titleStyle}>your choice was :</Text>
          <View>
            <Text style={styles.chosenNumberStyle}>{props.chosenNumber}</Text>
          </View>
          <Text style={styles.titleStyle}>Number Of Rounds :</Text>
          <View>
            <Text style={styles.chosenNumberStyle}>{props.numberOfRounds}</Text>
          </View>
          <View style={styles.buttonsView}>
            <View style={styles.buttons}>
              <Button title="START a New GAME" color={colors.primary} onPress={() => props.startNewGameHandler()} />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },

  card: {
    width: "80%",
    marginVertical: 30,
  },
  holder: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 17,
  },
  chosenNumberStyle: {
    textAlign: "center",
    width: 80,
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
    width: "70%",
    alignItems: "center",
  },
  buttons: {
    width: "100%",
    marginTop: 20,
  },
});

export default GameOverScreen;
