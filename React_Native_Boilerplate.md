# Core React Native & Supabase Code Scaffold

After running the `npx create-expo-app` command from the Migration Guide, you can replace or create these files in your new `PantryWiseMobile` folder to jumpstart the React Native version.

## 1. `supabase.ts` (Database Connection)
Create this file in the root of your project to initialize Supabase.

```typescript
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'YOUR_SUPABASE_PROJECT_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

## 2. `App.tsx` (Main Entry & Navigation)
This sets up React Navigation and checks if the user is authenticated.

```tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { supabase } from './supabase';
import { Session } from '@supabase/supabase-js';

// Import Screens
import AuthScreen from './screens/AuthScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {session && session.user ? (
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 3. `screens/AuthScreen.tsx` (Login/Signup via Supabase)
Translating your custom Auth Overlay into a React Native screen.

```tsx
import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { supabase } from '../supabase';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert(error.message);
    else Alert.alert('Check your email for the login link!');
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PantryWise</Text>
      <Text style={styles.subtitle}>Smart Pantry & Family Hub</Text>
      
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity style={styles.button} disabled={loading} onPress={signInWithEmail}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.verticallySpaced}>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} disabled={loading} onPress={signUpWithEmail}>
          <Text style={styles.buttonTextSecondary}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#F8FAFC' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#10B981', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#475569', textAlign: 'center', marginBottom: 20 },
  verticallySpaced: { paddingTop: 4, paddingBottom: 4, alignSelf: 'stretch' },
  mt20: { marginTop: 20 },
  input: { backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', borderWidth: 1, borderRadius: 12, padding: 16, fontSize: 16 },
  button: { backgroundColor: '#10B981', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonSecondary: { backgroundColor: 'transparent', borderColor: '#10B981', borderWidth: 1 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  buttonTextSecondary: { color: '#10B981', fontWeight: 'bold', fontSize: 16 }
});
```

## 4. `screens/DashboardScreen.tsx` (Fetching Data from Supabase)
A basic dashboard that replaces the HTML grid structure and queries Supabase.

```tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { supabase } from '../supabase';

export default function DashboardScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPantryItems();
  }, []);

  async function fetchPantryItems() {
    const { data, error } = await supabase
      .from('pantry_items')
      .select('*');
      
    if (error) console.log('Error fetching items:', error);
    else setItems(data);
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity onPress={signOut}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Your Pantry Items</Text>
      
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No items found. Add some!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  logoutText: { color: '#EF4444', fontWeight: '600', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', margin: 20, color: '#0F172A' },
  card: { backgroundColor: '#FFFFFF', padding: 16, marginHorizontal: 20, marginBottom: 10, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  itemName: { fontSize: 16, fontWeight: '600' },
  itemQty: { fontSize: 14, color: '#475569', marginTop: 4 },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#94A3B8' }
});
```
