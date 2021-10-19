import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.headBar}>
      <Text style={styles.headText}>Guess A Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headBar: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  headText: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Header;
