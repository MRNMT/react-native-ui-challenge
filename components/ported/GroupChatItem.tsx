import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GroupAvatar from './GroupAvatar';
import BadgeCount from './BadgeCount';

type Props = {
  avatars: any[];
  memberCount: number;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  onPress?: () => void;
};

export default function GroupChatItem({ avatars, memberCount, name, message, time, unreadCount = 0, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <GroupAvatar avatars={avatars} count={memberCount} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.message} numberOfLines={1}>{message}</Text>
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
