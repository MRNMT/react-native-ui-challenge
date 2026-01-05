import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type Props = {
  avatars: any[];
  count?: number;
};

export default function GroupAvatar({ avatars, count = 0 }: Props) {
  return (
    <View style={styles.container}>
      <Image source={avatars[0]} style={[styles.img, { left: 0, zIndex: 2 }]} />
      {avatars[1] && <Image source={avatars[1]} style={[styles.img, { left: 18, zIndex: 1 }]} />}
      {count > 2 && (
        <View style={[styles.more, { left: 36 }]}>
          <Image source={avatars[2] || avatars[0]} style={styles.imgSmall} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 48,
    position: 'relative',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
  },
  more: {
    position: 'absolute',
  },
  imgSmall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
});
