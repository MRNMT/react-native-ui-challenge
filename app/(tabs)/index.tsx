import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ChatHeader from '@/components/ported/ChatHeader';
import StoryAvatar from '@/components/ported/StoryAvatar';
import CardSection from '@/components/ported/CardSection';
import ChatListItem from '@/components/ported/ChatListItem';
import GroupChatItem from '@/components/ported/GroupChatItem';

const storyUsers = [
  { id: 1, name: 'Mira', avatar: require('@/assets/images/avatar-mira.png'), isOnline: true },
  { id: 2, name: 'Phill', avatar: require('@/assets/images/avatar-phill.png'), isOnline: true },
  { id: 3, name: 'Mike', avatar: require('@/assets/images/avatar-mike.png'), isOnline: false },
  { id: 4, name: 'Kierra', avatar: require('@/assets/images/avatar-kierra.png'), isOnline: false },
];

const recentChats = [
  { id: 1, name: 'Phillip Geidt', avatar: require('@/assets/images/avatar-phill.png'), message: 'Phillip is typing...', time: '11:34', unreadCount: 6, isOnline: true, isTyping: true },
  { id: 2, name: 'Kierra from Match', avatar: require('@/assets/images/avatar-kierra.png'), message: 'Voice message', time: '11:05', unreadCount: 2, isOnline: false, isVoiceMessage: true },
  { id: 3, name: 'Mike Smith', avatar: require('@/assets/images/avatar-mike.png'), message: 'Yes, put my name down in that list of the donations.', time: '10:31', unreadCount: 0, isOnline: false },
  { id: 4, name: 'Stacey Neighbor', avatar: require('@/assets/images/avatar-stacey.png'), message: 'Hi! Her mom already used it', time: '08:12', unreadCount: 0, isOnline: false },
];

const groupChats = [
  { id: 1, name: "Kevin's BP", avatars: [require('@/assets/images/avatar-kevin.png'), require('@/assets/images/avatar-mira.png')], memberCount: 6, message: 'Kate and Ann are typing...', time: '12:32', unreadCount: 6 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <CardSection>
          <ChatHeader title="Chats" notificationCount={6} />

          <View style={styles.storyRow}>
            {storyUsers.map((u) => (
              <StoryAvatar key={u.id} src={u.avatar} name={u.name} isOnline={u.isOnline} />
            ))}
          </View>
        </CardSection>

        <CardSection title="Recent Chat">
          {recentChats.map((c) => (
            <ChatListItem key={c.id} avatar={c.avatar} name={c.name} message={c.message} time={c.time} unreadCount={c.unreadCount} isOnline={c.isOnline} isTyping={c.isTyping} isVoiceMessage={c.isVoiceMessage} />
          ))}
        </CardSection>

        <CardSection title="Group Chat">
          {groupChats.map((g) => (
            <GroupChatItem key={g.id} avatars={g.avatars} memberCount={g.memberCount} name={g.name} message={g.message} time={g.time} unreadCount={g.unreadCount} />
          ))}
        </CardSection>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    backgroundColor: '#F3F4F6',
  },
  storyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    marginBottom: 6,
  },
});
