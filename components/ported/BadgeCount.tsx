import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  count: number;
  size?: number;
};

export default function BadgeCount({ count, size = 20 }: Props) {
  if (count <= 0) return null;

  const display = count > 99 ? '99+' : String(count);

  return (
    <View style={[styles.container, { minWidth: size, height: size, borderRadius: size / 2 }]}>
      <Text style={[styles.text, { fontSize: Math.max(10, size * 0.5) }]}>{display}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
});
