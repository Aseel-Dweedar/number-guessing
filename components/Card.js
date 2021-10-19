import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View {...props} style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
});

export default Card;
