import React, { useState } from "react";
import { Button, StyleSheet, View, Modal, Text } from "react-native";
import colors from "../constants/colors";
import Card from "./Card";

const StartModal = (props) => {
  return (
    <Card style={styles.card}>
      <View style={styles.holder}>
        <Text style={styles.titleStyle}>Chosen Number :</Text>
        <View>
          <Text style={styles.chosenNumberStyle}>{props.chosenNumber}</Text>
        </View>
        <View style={styles.buttonsView}>
          <View style={styles.buttons}>
            <Button
              title="START GAME"
              color={colors.primary}
              onPress={() => props.startNewGameHandler(props.chosenNumber)}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "60%",
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

export default StartModal;
