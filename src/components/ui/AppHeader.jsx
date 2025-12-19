import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export default function AppHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.textDark
  }
});
