import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import AvatarWithStatus from '@/components/ported/AvatarWithStatus';
import BadgeCount from '@/components/ported/BadgeCount';

export default function UIDemo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>React Native UI Demo</Text>

        <View style={styles.row}>
          <AvatarWithStatus uri={require('@/assets/images/react-logo.png')} size={72} status="online" />
          <View style={styles.info}>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text style={styles.sub}>Designer • 2 mutual friends</Text>
          </View>
          <BadgeCount count={3} />
        </View>

        <View style={styles.row}>
          <AvatarWithStatus uri={require('@/assets/images/partial-react-logo.png')} size={56} status="away" />
          <View style={styles.info}>
            <Text style={styles.name}>Sam Lee</Text>
            <Text style={styles.sub}>Product • remote</Text>
          </View>
          <BadgeCount count={0} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Image Example</Text>
          <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.logo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  sub: {
    color: '#6B7280',
  },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 8,
  },
  cardTitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
  logo: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
});
