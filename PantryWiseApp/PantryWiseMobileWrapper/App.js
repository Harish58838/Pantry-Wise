import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import * as React from 'react';
import Constants from 'expo-constants';

export default function App() {
  const expoConfig = Constants.expoConfig || {};
  const manifest = Constants.manifest || {};
  const manifest2 = Constants.manifest2 || {};
  const hostUriInfo = expoConfig.hostUri || manifest.hostUri || manifest.debuggerHost || manifest2?.extra?.expoGo?.debuggerHost || '192.168.0.104';

  // Use port 55257 as fallback since 3000 was in use
  const ipAddress = hostUriInfo.split(':')[0];
  const uri = `http://${ipAddress}:55257/indexall.html`;

  // Force HTML/Body to take 100% of the viewport and force the unstyled app to be visible.
  // We also intercept DOM load to force the splash screen overlay to display block.
  const INJECTED_JAVASCRIPT = `
    const style = document.createElement('style');
    style.innerHTML = 'html, body { width: 100vw !important; height: 100vh !important; overflow: auto !important; background-color: #1a1a2e !important; margin: 0 !important; }';
    document.head.appendChild(style);

    // Guaranteed Splash Screen removal (Fix for broken vanilla DOMContentLoaded)
    setTimeout(() => {
      const splash = document.getElementById('appSplashScreenOverlay');
      if (splash) {
         splash.style.opacity = '0';
         setTimeout(() => { splash.style.display = 'none'; }, 500);
      }
      window.ReactNativeWebView.postMessage("Splash Cleared");
    }, 2000);

    true;
  `;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <WebView
        source={{ uri }}
        style={styles.webview}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        cacheEnabled={false}
        incognito={true}
        mixedContentMode="always"
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={(event) => {
          console.log('[WebView JS]', event.nativeEvent.data);
        }}
        renderError={(errorDomain, errorCode, errorDesc) => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#900', padding: 20 }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>NETWORK BLOCKED</Text>
            <Text style={{ color: 'white', marginTop: 10 }}>Cannot reach the Web App Server at IP: {ipAddress}</Text>
            <Text style={{ color: '#ffaaaa', marginTop: 20 }}>Error: {errorDesc}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Clean white background for the notch area
    paddingTop: Constants.statusBarHeight, // Pushes content below the device status bar
  },
  webview: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  }
});
