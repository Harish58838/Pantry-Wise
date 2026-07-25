import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Camera, CameraView } from 'expo-camera';
import { supabase } from '../../supabase';

export default function ScannerScreen({ navigation }: any) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: { type: string, data: string }) => {
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

  const addToInventory = async (barcode: string) => {
    const { error } = await supabase
      .from('pantry_items')
      .insert([{ name: `Scanned Item (${barcode})`, quantity: 1 }]);
    
    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert('Success', 'Item added to pantry!');
      navigation.navigate('Inventory');
    }
  };

  if (hasPermission === null) return <Text>Requesting for camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
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
