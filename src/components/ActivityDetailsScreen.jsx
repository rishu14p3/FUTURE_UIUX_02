import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../styles/theme";

export default function ActivityDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Morning Meditation</Text>
      <Text style={styles.desc}>
        Spend 10 minutes focusing on your breath to calm your mind and
        improve clarity.
      </Text>

      <TouchableOpacity style={styles.completeBtn}>
        <Text style={styles.completeText}>Mark as Completed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.textDark
  },
  desc: {
    marginTop: 16,
    fontSize: 15,
    color: COLORS.textLight,
    lineHeight: 22
  },
  completeBtn: {
    marginTop: 40,
    backgroundColor: COLORS.success,
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center"
  },
  completeText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16
  }
});

