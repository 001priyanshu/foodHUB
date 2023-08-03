import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen.js";
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <>

      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


