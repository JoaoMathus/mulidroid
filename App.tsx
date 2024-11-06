import "./global.css";
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
import AjudanteForm from "./src/screens/ajudante-form";
import ServicoForm from './src/screens/servico-form';
import TelaPerfil from './src/screens/perfil';
import TelaHome from './src/screens/home';
import Login from "./src/screens/login";
import VeiculoForm from "./src/screens/veiculo-form";
import Servico from "./src/screens/servico";
import { NavigationContainer } from '@react-navigation/native';
import Ajudante from "./src/screens/ajudante";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {

  //FAZER ESSES STATES SEREM GLOBAIS IMPORTANTE!!!!!!
  const [logado, setLogado] = useState(false);
  const [admin, setAdmin] = useState(false);

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
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerStyle: headerStyle.header
        }}
      >
        {!logado ? (
          <Stack.Screen name='Login' options={{
            headerShown: false
          }}>
            {/* Codigozinho para condicionar a renderização de admin e usuário */(props) => <Login {...props}
              logar={() => {
                setLogado(true);
                setAdmin(false);
              }}
              adminLogou={() => {
                setLogado(true);
                setAdmin(true);
              }}
            />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name='Home' options={{
              headerShown: false
            }}>
              {(props) => <TelaHome {...props} deslogar={() => { setLogado(false); setAdmin(false); }} />}
            </Stack.Screen>
            <Stack.Screen name='Perfil' options={{
              headerShown: admin
            }}>
              {(props) => <TelaPerfil {...props} adminAqui={admin} deslogar={() => setLogado(false)} />}
            </Stack.Screen>
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

const headerStyle = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    shadowColor: "transparent"
  }
})
