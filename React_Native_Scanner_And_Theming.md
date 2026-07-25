# React Native Barcode Scanner & Global Theming

To capture the remaining functionality of the PantryWise app, we need to implement the Barcode Scanner (for quick inventory addition) and set up a Global Theme system to manage your Light/Dark mode CSS variables.

## 1. Barcode Scanner Implementation
Your original HTML had a `.mobile-barcode-fab` button. In React Native, we can use Expo's native camera and barcode scanning libraries to make this fully functional.

```bash
# Install the necessary Expo camera and barcode scanner packages
npx expo install expo-camera expo-barcode-scanner
```

**`screens/ScannerScreen.tsx`**
```tsx
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { supabase } from '../supabase';

export default function ScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      "Barcode Scanned",
      `Barcode data: ${data}\nWould you like to add this to your inventory?`,
      [
        { text: "Cancel", style: "cancel", onPress: () => setScanned(false) },
        { text: "Add", onPress: () => addToInventory(data) }
      ]
    );
  };

  const addToInventory = async (barcode) => {
    // In a real app, you would hit an API (like OpenFoodFacts) to get the product name from the barcode.
    // For now, we save the barcode as the name.
    const { error } = await supabase
      .from('pantry_items')
      .insert([{ name: `Scanned Item (${barcode})`, quantity: 1 }]);
    
    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert('Success', 'Item added to pantry!');
      navigation.navigate('Inventory'); // Go back to inventory view
    }
  };

  if (hasPermission === null) return <Text>Requesting for camera permission</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} color="#10B981" />}
      
      <View style={styles.overlay}>
        <View style={styles.scanTarget} />
        <Text style={styles.promptText}>Align barcode within the frame</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column', justifyContent: 'flex-end' },
  overlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  scanTarget: { width: 250, height: 250, borderWidth: 2, borderColor: '#10B981', backgroundColor: 'transparent', borderRadius: 20 },
  promptText: { color: 'white', marginTop: 20, fontSize: 16, fontWeight: 'bold' }
});
```

## 2. Global Theme System (Translating your CSS Variables)
In your `index.html`, you extensively used CSS variables like `--primary: #10B981`. React Native does not support CSS variables. Instead, you create a central theme file.

**`theme/colors.ts`**
```typescript
// Translating the CSS variables from lines 26-92 of your index.html
export const lightTheme = {
  primary: '#10B981',
  primaryHover: '#0D9668',
  secondary: '#1E293B',
  accent: '#F59E0B',
  bgMain: '#F8FAFC',
  surface: '#FFFFFF',
  surface2: '#F1F5F9',
  border: '#E2E8F0',
  textPrimary: '#0F172A',
  textSecondary: '#475569',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  info: '#3B82F6',
};

export const darkTheme = {
  primary: '#34D399',
  primaryHover: '#10B981',
  secondary: '#334155',
  accent: '#FBBF24',
  bgMain: '#0F172A',
  surface: '#1E293B',
  surface2: '#334155',
  border: '#334155',
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  success: '#34D399',
  warning: '#FBBF24',
  danger: '#F87171',
  info: '#60A5FA',
};
```

### How to use this theme in your components:
Instead of hardcoding colors, import the theme.

```tsx
import { StyleSheet, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../theme/colors';

export default function MyComponent() {
  // React Native automatically detects the phone's system light/dark mode!
  const colorScheme = useColorScheme(); 
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={{ backgroundColor: theme.bgMain }}>
      <Text style={{ color: theme.textPrimary }}>Dynamic Text</Text>
    </View>
  );
}
```

## 3. Adding the Custom Fonts
Your app uses `Inter` and `Outfit` from Google Fonts. Here is how to load them in React Native Expo.

```bash
npx expo install @expo-google-fonts/inter @expo-google-fonts/outfit expo-font
```

**Update `App.tsx` to load fonts:**
```tsx
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Outfit_700Bold } from '@expo-google-fonts/outfit';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or a loading splash screen
  }

  // ... rest of your App.tsx code
}
```
