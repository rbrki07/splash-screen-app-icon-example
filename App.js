// @ts-check
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      // Keep the splash screen visible while initialising app
      await SplashScreen.preventAutoHideAsync();
      // Example for time consuming initialisation
      await new Promise((resolve) => setTimeout(resolve, 2500));
      setAppIsReady(true);
    };
    initApp();
  }, []);

  const onLayoutCallback = useCallback(async () => {
    if (appIsReady) {
      // Hide splash screen once initialisation is done
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutCallback} style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
