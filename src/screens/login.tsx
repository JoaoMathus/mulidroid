import React, { useContext, useEffect, useState } from "react";
import { Image, View, Alert } from "react-native";
import * as Crypto from "expo-crypto";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Text from "../components/ui/text";
import OfflineNotice from "../components/offline-notice";
import UserContext from "../hooks/userContext";
import useNavigation from "../hooks/useNavigation";
import http from "../http/http";
import type IUser from "../interfaces/IUser";
import * as LocalAuthentication from "expo-local-authentication"; // para biometria

// Senhas digeridas para testes, apenas.
const senhaTesteAdmin = Crypto.digestStringAsync(
	Crypto.CryptoDigestAlgorithm.SHA256,
	"Muitobom",
);
const senhaTesteUsuario = Crypto.digestStringAsync(
	Crypto.CryptoDigestAlgorithm.SHA256,
	"Naoseiasenha"
)

// Nosso administrador Alomomola, para testes.
const admin = {
	user: "Alomomola",
	password: senhaTesteAdmin,
};
// Nosso usuário de teste.
const usuarioNormal = {
	user: "Garbodor",
	password: senhaTesteUsuario
};

const Login = () => {
	const [suportaBiometria, setSuportaBiometria] = useState(false);
	const [temBiometria, setTemBiometria] = useState(false);
	const [usuario, setUsuario] = useState("");
	const [senha, setSenha] = useState("");
	const { logado, setLogado, adminAqui, setAdminAqui } = useContext(UserContext);
	const { navigate } = useNavigation().navigator;

	useEffect(() => {
		(async () => {
			const compativel = await LocalAuthentication.hasHardwareAsync();
			setSuportaBiometria(compativel);
		})();
	});

	//meio pronto irei dar uma olhada em estatistica
	// Sim, essa aqui não precisa de cache (?), tem que conectar direto.

	const logarUsuario =  async () => {
		const res = await http.post<IUser>("user", {
			username: "Praga1910",
			password: "1393"
		})

		console.log(res.data);
	}

	LocalAuthentication.isEnrolledAsync().then((data) => {
		setTemBiometria(data);
	});

	const autenticarComBiometria = async () => {
		const resultado = LocalAuthentication.authenticateAsync({
			promptMessage: "Use a biometria"
		});

		if ((await resultado).success) {
			setLogado(true);
			setAdminAqui(true);
		}
	}

	return (
		<>
			{/* Verificando conexão com a internet, sem ela, lamento... 

			kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
			*/}
			<OfflineNotice />
			{/* Verificando se tem biometria no aparelho... 
				Foi para depurar, agora esses Texts virou história.
			*/}
			{/*<Text>{suportaBiometria ? "Seu aparelho suporta biometria"
				: "Não tem biometria"}</Text> */}
			{/*<Text>{temBiometria? "Aqui tem biometria salva" : "Não tem biometria salva"}</Text>*/}
			<View className="w-full h-full justify-center gap-6 p-8">
				<View className="items-center">
					<Image
						className="w-52 h-52"
						source={require("../../assets/mulidroid_logo.png")}
						accessibilityLabel="A logo do aplicativo"
					/>
				</View>
				<View className="gap-6">
					<View>
						<Input label="Usuário" onChangeText={setUsuario} value={usuario} />
					</View>
					<View>
						<Input
							secureTextEntry
							label="Senha"
							onChangeText={setSenha}
							value={senha}
						/>
						<Text className="text-sm text-black/50 underline self-end mt-1">
							Esqueceu a senha ?
						</Text>
					</View>
				</View>
				<Button
					className="bg-blue-500 p-4 rounded-md"
					onPress={async () => {
						// Metendo o hash no garoto.  JKKKKKKKKKKKKKK
						const estaSenha = await Crypto.digestStringAsync(
							Crypto.CryptoDigestAlgorithm.SHA256,
							senha,
						);
						if (usuario.trim() === usuarioNormal.user && estaSenha === (await usuarioNormal.password)) {
							setLogado(true);
							navigate("Perfil"); // se não for admin, vai direto pro Perfil.
						} else if (usuario.trim() === admin.user && estaSenha === (await admin.password)) {
							setLogado(true);
							setAdminAqui(true);
						} else {
							Alert.alert("Usuário ou senha errada!");
						}
					}}
				>
					<Text className="text-center text-lg text-white" weight="semiBold">
						Login
					</Text>
				</Button>
				{(suportaBiometria && temBiometria) ? (
					<Button className="bg-white p-4" onPress={() => autenticarComBiometria()}>
						<Text className="text-center text-lg" weight="bold">Toque aqui para biometria!</Text>
					</Button>
					) : (<></>)
				}
			</View>
		</>
	);
};

export default Login;
