import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BadgeCount from './BadgeCount';

type Props = {
  title: string;
  notificationCount?: number;
  onBack?: () => void;
  onProfile?: () => void;
};

export default function ChatHeader({ title, notificationCount = 0, onBack, onProfile }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.button}>
        <Text style={styles.icon}>{'‹'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onProfile} style={styles.button}>
        <Text style={styles.icon}>☺</Text>
        {notificationCount > 0 && <BadgeCount count={notificationCount} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
});
