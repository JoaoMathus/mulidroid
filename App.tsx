import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "./global.css";
import Text from "./src/components/text";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  SofiaSans_100Thin,
  SofiaSans_200ExtraLight,
  SofiaSans_300Light,
  SofiaSans_400Regular,
  SofiaSans_500Medium,
  SofiaSans_600SemiBold,
  SofiaSans_700Bold,
  SofiaSans_800ExtraBold,
  SofiaSans_900Black,
  SofiaSans_100Thin_Italic,
  SofiaSans_200ExtraLight_Italic,
  SofiaSans_300Light_Italic,
  SofiaSans_400Regular_Italic,
  SofiaSans_500Medium_Italic,
  SofiaSans_600SemiBold_Italic,
  SofiaSans_700Bold_Italic,
  SofiaSans_800ExtraBold_Italic,
  SofiaSans_900Black_Italic,
} from "@expo-google-fonts/sofia-sans";
import { useEffect } from "react";


export default function App() {

    const [loaded, error] = useFonts({
      SofiaSans_100Thin,
      SofiaSans_200ExtraLight,
      SofiaSans_300Light,
      SofiaSans_400Regular,
      SofiaSans_500Medium,
      SofiaSans_600SemiBold,
      SofiaSans_700Bold,
      SofiaSans_800ExtraBold,
      SofiaSans_900Black,
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
    <View className="flex items-center h-screen justify-center">
      <Text weight="black">Mulidroid</Text>
      <StatusBar style="auto" />
    </View>
  );
}
