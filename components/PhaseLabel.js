import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const PhaseLabel = ({ phase }) => {
  const getPhaseStyle = () => {
    switch(phase) {
      case 'Inhale':
        return styles.inhale;
      case 'Exhale':
        return styles.exhale;
      case 'Hold':
        return styles.hold;
      default:
        return styles.text;
    }
  };

  return <Text style={[styles.text, getPhaseStyle()]}>{phase}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 30,
    letterSpacing: 1,
  },
  inhale: {
    color: COLORS.primary,
  },
  exhale: {
    color: COLORS.secondary,
  },
  hold: {
    color: COLORS.textLight,
  },
});

export default PhaseLabel;