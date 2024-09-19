import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from './components/ui/button';

const App = () => {
  return (
    <GluestackUIProvider mode="light">
      <View>
        <Button size="md" variant="solid" action="primary">
          <ButtonText>Branch Dev</ButtonText>
        </Button>
      </View>
    </GluestackUIProvider>
  );
}

export default App;