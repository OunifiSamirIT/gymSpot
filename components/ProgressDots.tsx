import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressDotsProps {
  totalDots: number;
  currentIndex: number;
}

export function ProgressDots({ totalDots, currentIndex }: ProgressDotsProps) {
  return (
    <View style={styles.dotsContainer}>
      {[...Array(totalDots)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex && styles.activeDot,
            index < currentIndex && styles.completedDot
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 40,
  },
  dot: {
    width: 24,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  activeDot: {
    backgroundColor: '#FF8A00',
    width: 32,
  },
  completedDot: {
    backgroundColor: '#FF8A00',
  },
});
