import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../styles/theme";

export default function StatCard({ label, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    padding: 20,
    borderRadius: 16,
    width: "48%",
    elevation: 3
  },
  value: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.primary
  },
  label: {
    color: COLORS.textLight,
    marginTop: 6
  }
});
