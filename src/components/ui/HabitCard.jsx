import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../styles/theme";

export default function HabitCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>Tap to view details</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textDark
  },
  sub: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 4
  }
});
