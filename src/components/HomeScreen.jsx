import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../styles/theme";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MindBloom</Text>
      <Text style={styles.tagline}>
        Build healthy habits. Strengthen your mind.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  },
  logo: {
    fontSize: 34,
    fontWeight: "800",
    color: COLORS.primary
  },
  tagline: {
    textAlign: "center",
    color: COLORS.textLight,
    marginVertical: 20,
    fontSize: 16
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30
  },
  buttonText: {
    color: "#ede3e3ff",
    fontWeight: "600",
    fontSize: 16
  }
});
