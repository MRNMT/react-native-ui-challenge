import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type Props = {
  uri?: any;
  size?: number;
  status?: 'online' | 'offline' | 'away';
};

export default function AvatarWithStatus({ uri, size = 56, status = 'online' }: Props) {
  const statusColor =
    status === 'online' ? '#34D399' : status === 'away' ? '#F59E0B' : '#9CA3AF';

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image source={uri} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
      <View style={[styles.status, { backgroundColor: statusColor, right: Math.max(2, size * 0.06), bottom: Math.max(2, size * 0.06) }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
  },
  status: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
});
