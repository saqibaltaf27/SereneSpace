import React from "react";
import { Animated, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const BreathingCircle = ({ scale }) => {
  return (
    <Animated.View
      style={[
        styles.circle,
        {
          transform: [{ scale }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
});

export default BreathingCircle;