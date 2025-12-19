import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppHeader from "./ui/AppHeader";
import StatCard from "./ui/StatCard";
import HabitCard from "./ui/HabitCard";
import { COLORS } from "../styles/theme";

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <AppHeader title="Your Dashboard" />

      <View style={styles.statsRow}>
        <StatCard label="Streak Days" value="12" />
        <StatCard label="Habits Done" value="5/7" />
      </View>

      <HabitCard
        title="Morning Meditation"
        onPress={() => navigation.navigate("Details")}
      />
      <HabitCard title="Evening Walk" />
      <HabitCard title="Gratitude Journal" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20
  }
});
