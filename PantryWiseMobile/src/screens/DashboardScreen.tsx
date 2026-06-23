import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useColorScheme } from 'react-native';
import { supabase } from '../../supabase';
import PremiumCard from '../components/PremiumCard';
import { lightTheme, darkTheme } from '../theme/colors';

export default function DashboardScreen() {
  const [itemsCount, setItemsCount] = useState(0);
  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    const { count, error } = await supabase
      .from('pantry_items')
      .select('*', { count: 'exact', head: true });
      
    if (!error && count !== null) {
      setItemsCount(count);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.bgMain }]}>
      <Text style={[styles.greeting, { color: theme.textPrimary }]}>Welcome back!</Text>
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>Here is your pantry overview.</Text>

      <View style={styles.cardRow}>
        <PremiumCard title="Total Items" value={itemsCount} icon="cube" color={theme.primary} />
        <PremiumCard title="Expiring Soon" value="2" icon="warning" color={theme.warning} />
      </View>

      <View style={[styles.chartContainer, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Text style={[styles.chartTitle, { color: theme.textPrimary }]}>Activity Overview</Text>
        <Text style={{ color: theme.textSecondary, textAlign: 'center', marginTop: 20 }}>
          (Chart integration goes here)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  greeting: { fontSize: 28, fontWeight: 'bold', marginTop: 20 },
  subtitle: { fontSize: 16, marginBottom: 24 },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 },
  chartContainer: { padding: 20, borderRadius: 16, borderWidth: 1, minHeight: 200 },
  chartTitle: { fontSize: 18, fontWeight: 'bold' }
});
