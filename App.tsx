import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import "./global.css";
import Text from "./src/components/ui/text";
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
} from "@expo-google-fonts/sofia-sans";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Button from "./src/components/ui/button";
import AjudanteForm from "./src/screens/ajudante-form";
import ServicoForm from './src/screens/servico-form';
import TelaPerfil from './src/screens/perfil';
import TelaHome from './src/screens/home';
import Login from "./src/screens/login";
import VeiculoForm from "./src/screens/veiculo-form";
import Servico from "./src/screens/servico";
import Home from "./src/screens/home";
import { NavigationContainer } from '@react-navigation/native';
import Ajudante from "./src/screens/ajudante";

const Stack = createStackNavigator();

/**
 * TODO: melhorar a navegação
 */
export default function App() {
    const [logado, setLogado] = useState(false);

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
      <NavigationContainer>
        <Stack.Navigator>
          {!logado ? (
            <Stack.Screen name='Login'>
              {(props) => <Login {...props} logar={() => setLogado(true)} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name='Home'>
                {(props) => <TelaHome {...props} deslogar={() => setLogado(false)} />}
              </Stack.Screen>
              <Stack.Screen name='Perfil' component={TelaPerfil} />
              <Stack.Screen name='Ajudante' component={Ajudante} />
              <Stack.Screen name='Servico' component={Servico} />
              <Stack.Screen name='Cadastro de Ajudante' component={AjudanteForm} />
              <Stack.Screen name='Cadastro de Serviço' component={ServicoForm} />
              <Stack.Screen name='Cadastro de Veículo' component={VeiculoForm} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
}
