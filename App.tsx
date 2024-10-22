import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css";

export default function App() {
  return (
    <View className="flex items-center h-screen justify-center">
      <Text>Mulidroid</Text>
      <StatusBar style="auto" />
    </View>
  );
}
