# React Native Advanced Features & Screens

To fully replace your `index.html` application, we need to build out the Inventory Management, Family Hub, and Tab Navigation. Here is the advanced code to complete your React Native migration.

## 1. Update `App.tsx` (Adding Tab Navigation)
Replace the simple stack in `App.tsx` with a bottom tab navigator for mobile-friendly routing between your Dashboard, Inventory, and Family Hub.

```bash
# First, install bottom tabs
npm install @react-navigation/bottom-tabs
```

```tsx
// App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from './supabase';

import AuthScreen from './screens/AuthScreen';
import DashboardScreen from './screens/DashboardScreen';
import InventoryScreen from './screens/InventoryScreen';
import FamilyHubScreen from './screens/FamilyHubScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = 'home';
          else if (route.name === 'Inventory') iconName = 'list';
          else if (route.name === 'Family Hub') iconName = 'people';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10B981',
        tabBarInactiveTintColor: '#94A3B8',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Family Hub" component={FamilyHubScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session && session.user ? (
          <Stack.Screen name="Main" component={MainTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 2. `screens/InventoryScreen.tsx` (Full CRUD operations)
This screen lets you add, delete, and view pantry inventory.

```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../supabase';

export default function InventoryScreen() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    // Assuming family_id is handled either by RLS or defaulting to null for testing
    const { data, error } = await supabase.from('pantry_items').select('*').order('created_at', { ascending: false });
    if (!error) setItems(data);
  }

  async function addItem() {
    if (!newItemName || !newItemQty) {
      Alert.alert('Please enter a name and quantity');
      return;
    }

    const { error } = await supabase
      .from('pantry_items')
      .insert([{ name: newItemName, quantity: parseInt(newItemQty) }]);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setNewItemName('');
      setNewItemQty('');
      fetchItems();
    }
  }

  async function deleteItem(id) {
    const { error } = await supabase.from('pantry_items').delete().eq('id', id);
    if (!error) fetchItems();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory</Text>
      
      {/* Add Item Form */}
      <View style={styles.formCard}>
        <TextInput 
          style={styles.input} 
          placeholder="Item Name (e.g. Milk)" 
          value={newItemName} 
          onChangeText={setNewItemName} 
        />
        <View style={styles.row}>
          <TextInput 
            style={[styles.input, styles.qtyInput]} 
            placeholder="Qty" 
            keyboardType="numeric"
            value={newItemQty} 
            onChangeText={setNewItemQty} 
          />
          <TouchableOpacity style={styles.addButton} onPress={addItem}>
            <Text style={styles.addButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Inventory List */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemQty}>Quantity: {item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Ionicons name="trash-outline" size={24} color="#EF4444" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#0F172A' },
  formCard: { backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  input: { backgroundColor: '#F1F5F9', padding: 12, borderRadius: 8, marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  qtyInput: { flex: 0.3, marginBottom: 0 },
  addButton: { flex: 0.65, backgroundColor: '#10B981', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  addButtonText: { color: '#FFF', fontWeight: 'bold' },
  itemCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 10 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  itemQty: { color: '#64748B', marginTop: 4 }
});
```

## 3. `screens/FamilyHubScreen.tsx` (Members View)
Translate the Family Sync area so users can see who is in their household.

```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../supabase';

export default function FamilyHubScreen() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchFamilyMembers();
  }, []);

  async function fetchFamilyMembers() {
    // In a real app, you would query based on the current user's family_id
    const { data, error } = await supabase.from('profiles').select('*');
    if (!error) setMembers(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Family Sync Hub</Text>
      <Text style={styles.subtitle}>Manage your household members</Text>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.memberCard}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={24} color="#FFF" />
            </View>
            <View>
              <Text style={styles.memberName}>{item.full_name || 'Family Member'}</Text>
              <Text style={styles.memberRole}>User ID: {item.id.substring(0, 8)}...</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0F172A' },
  subtitle: { fontSize: 14, color: '#64748B', marginBottom: 20 },
  memberCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 10 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#3B82F6', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  memberName: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  memberRole: { color: '#64748B', marginTop: 4, fontSize: 12 }
});
```

## 4. Replacing Chart.js in React Native
Since `Chart.js` relies on HTML Canvas, you cannot use it directly in standard React Native `<View>` components. 

To recreate the beautiful analytics seen in your HTML Dashboard, you should install a native chart library:
```bash
npm install react-native-chart-kit
npm install react-native-svg
```

**Example Chart implementation for your Dashboard:**
```tsx
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Inside your Dashboard component:
<LineChart
  data={{
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{ data: [12, 19, 3, 5, 2, 3, 10] }]
  }}
  width={screenWidth - 40}
  height={220}
  chartConfig={{
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(16, 185, 129, ${opacity})`, // Using your primary green (#10B981)
    labelColor: (opacity = 1) => `rgba(71, 85, 105, ${opacity})`,
    style: { borderRadius: 16 },
  }}
  bezier
  style={{ marginVertical: 8, borderRadius: 16 }}
/>
```
