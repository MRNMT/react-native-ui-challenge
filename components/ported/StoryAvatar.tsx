import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AvatarWithStatus from './AvatarWithStatus';

type Props = {
  src: any;
  name: string;
  isOnline?: boolean;
};

export default function StoryAvatar({ src, name, isOnline = false }: Props) {
  return (
    <View style={styles.container}>
      <AvatarWithStatus uri={src} size={60} status={isOnline ? 'online' : 'offline'} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 72,
  },
  name: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
  },
});
