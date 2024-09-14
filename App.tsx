import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from './components/ui/button';

export default function App() {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>
      <Button size="md" variant="solid" action="primary">
        <ButtonText>Branch Dev</ButtonText>
      </Button>
    </View></GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
