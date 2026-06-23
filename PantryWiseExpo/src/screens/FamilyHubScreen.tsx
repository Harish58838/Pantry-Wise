import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../supabase';
import { lightTheme, darkTheme } from '../theme/colors';

export default function FamilyHubScreen() {
  const [members, setMembers] = useState<any[]>([]);

  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    fetchFamilyMembers();
  }, []);

  async function fetchFamilyMembers() {
    const { data, error } = await supabase.from('profiles').select('*');
    if (!error && data) setMembers(data);
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.bgMain }]}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>Family Sync Hub</Text>
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>Manage your household members</Text>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.memberCard, { backgroundColor: theme.surface }]}>
            <View style={[styles.avatar, { backgroundColor: theme.info }]}>
              <Ionicons name="person" size={24} color="#FFF" />
            </View>
            <View>
              <Text style={[styles.memberName, { color: theme.textPrimary }]}>{item.full_name || 'Family Member'}</Text>
              <Text style={[styles.memberRole, { color: theme.textSecondary }]}>User ID: {item.id.substring(0, 8)}...</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginBottom: 20 },
  memberCard: { flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 12, marginBottom: 10 },
  avatar: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  memberName: { fontSize: 16, fontWeight: 'bold' },
  memberRole: { marginTop: 4, fontSize: 12 }
});
