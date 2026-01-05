import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AvatarWithStatus from './AvatarWithStatus';
import BadgeCount from './BadgeCount';

type Props = {
  avatar: any;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  isOnline?: boolean;
  isTyping?: boolean;
  isVoiceMessage?: boolean;
  onPress?: () => void;
};

export default function ChatListItem({ avatar, name, message, time, unreadCount = 0, isOnline = false, isTyping = false, isVoiceMessage = false, onPress, }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <AvatarWithStatus uri={avatar} size={52} status={isOnline ? 'online' : 'offline'} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>{isTyping ? message : message}</Text>
      </View>

      <View style={styles.meta}>
        <Text style={styles.time}>{time}</Text>
        <BadgeCount count={unreadCount} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  content: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  message: {
    color: '#6B7280',
    marginTop: 2,
  },
  meta: {
    alignItems: 'flex-end',
    gap: 6,
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
