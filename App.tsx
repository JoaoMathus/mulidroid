import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import CadastroServico from "@/src/screens/cadastro-servico";
import CadastroVeiculo from "@/src/screens/cadastro-veiculo";
import CadastroAjudante from "./src/screens/cadastro-ajudante";
import { Outfit_300Light, Outfit_400Regular, Outfit_700Bold, Outfit_900Black, useFonts } from "@expo-google-fonts/outfit";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [loaded, error] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_700Bold,
    Outfit_900Black
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <View className="">
        <CadastroAjudante/>
      </View>
    </GluestackUIProvider>
  );
}

export default App;