import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, useColorScheme } from 'react-native';
import { supabase } from '../../supabase';
import { lightTheme, darkTheme } from '../theme/colors';

export default function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const isDark = useColorScheme() === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Error', error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Error', error.message);
    else Alert.alert('Check your email for the login link!');
    setLoading(false);
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.bgMain }]}>
      <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
        <Text style={[styles.title, { color: theme.primary }]}>PantryWise</Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>Smart Pantry & Family Hub</Text>
        
        <TextInput
          style={[styles.input, { backgroundColor: theme.surface2, borderColor: theme.border, color: theme.textPrimary }]}
          onChangeText={setEmail}
          value={email}
          placeholder="email@address.com"
          placeholderTextColor={theme.textSecondary}
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.surface2, borderColor: theme.border, color: theme.textPrimary }]}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={theme.textSecondary}
          autoCapitalize="none"
        />
        
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} disabled={loading} onPress={signInWithEmail}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.buttonSecondary, { borderColor: theme.primary }]} disabled={loading} onPress={signUpWithEmail}>
          <Text style={[styles.buttonTextSecondary, { color: theme.primary }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  card: { padding: 32, borderRadius: 24, borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.1, shadowRadius: 24, elevation: 5 },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 32 },
  input: { borderWidth: 1, borderRadius: 12, padding: 16, fontSize: 16, marginBottom: 16 },
  button: { padding: 16, borderRadius: 12, alignItems: 'center', marginBottom: 12 },
  buttonSecondary: { padding: 16, borderRadius: 12, alignItems: 'center', borderWidth: 1 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  buttonTextSecondary: { fontWeight: 'bold', fontSize: 16 }
});
