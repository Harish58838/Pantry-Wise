import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../supabase';
import { lightTheme, darkTheme } from '../theme/colors';

export default function InventoryScreen() {
  const [items, setItems] = useState<any[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');

  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    const { data, error } = await supabase.from('pantry_items').select('*').order('created_at', { ascending: false });
    if (!error && data) setItems(data);
  }

  async function addItem() {
    if (!newItemName || !newItemQty) {
      Alert.alert('Please enter a name and quantity');
      return;
    }

    const { error } = await supabase
      .from('pantry_items')
      .insert([{ name: newItemName, quantity: parseInt(newItemQty, 10) }]);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setNewItemName('');
      setNewItemQty('');
      fetchItems();
    }
  }

  async function deleteItem(id: string) {
    const { error } = await supabase.from('pantry_items').delete().eq('id', id);
    if (!error) fetchItems();
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.bgMain }]}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>Inventory</Text>
      
      <View style={[styles.formCard, { backgroundColor: theme.surface, shadowColor: theme.secondary }]}>
        <TextInput 
          style={[styles.input, { backgroundColor: theme.surface2, color: theme.textPrimary }]} 
          placeholder="Item Name (e.g. Milk)" 
          placeholderTextColor={theme.textSecondary}
          value={newItemName} 
          onChangeText={setNewItemName} 
        />
        <View style={styles.row}>
          <TextInput 
            style={[styles.input, styles.qtyInput, { backgroundColor: theme.surface2, color: theme.textPrimary }]} 
            placeholder="Qty" 
            placeholderTextColor={theme.textSecondary}
            keyboardType="numeric"
            value={newItemQty} 
            onChangeText={setNewItemQty} 
          />
          <TouchableOpacity style={[styles.addButton, { backgroundColor: theme.primary }]} onPress={addItem}>
            <Text style={styles.addButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemCard, { backgroundColor: theme.surface }]}>
            <View>
              <Text style={[styles.itemName, { color: theme.textPrimary }]}>{item.name}</Text>
              <Text style={[styles.itemQty, { color: theme.textSecondary }]}>Quantity: {item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Ionicons name="trash-outline" size={24} color={theme.danger} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  formCard: { padding: 16, borderRadius: 12, marginBottom: 20, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  input: { padding: 12, borderRadius: 8, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  qtyInput: { flex: 0.3, marginBottom: 0 },
  addButton: { flex: 0.65, justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  addButtonText: { color: '#FFF', fontWeight: 'bold' },
  itemCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderRadius: 12, marginBottom: 10 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemQty: { marginTop: 4 }
});
