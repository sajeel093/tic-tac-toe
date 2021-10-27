import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row" }}>
        <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]} />
        <Icon name="close"/>

        <View style={[styles.tile, { borderTopWidth: 0 }]} />
        <View style={[styles.tile, { borderRightWidth: 0, borderTopWidth: 0 }]} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={[styles.tile, { borderLeftWidth: 0 }]} />
        <View style={[styles.tile, {}]} />
        <View style={[styles.tile, { borderRightWidth: 0 }]} />
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]} />
        <View style={[styles.tile, { borderBottomWidth: 0 }]} />
        <View style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    width: 100,
    height: 100,
    borderWidth: 10,



  }
});
