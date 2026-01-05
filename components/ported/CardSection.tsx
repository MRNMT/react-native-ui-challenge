import React from 'react';
import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title?: string;
  children?: ReactNode;
};

export default function CardSection({ title, children }: Props) {
  return (
    <View style={styles.card}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontWeight: '700',
    marginBottom: 8,
  },
});
