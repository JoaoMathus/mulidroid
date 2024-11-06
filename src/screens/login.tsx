import React, { useContext, useState } from "react";
import { Image, View, Alert } from "react-native";
import * as Crypto from "expo-crypto";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Text from "../components/ui/text";
import OfflineNotice from "../components/offline-notice";
import UserContext from "../components/hooks/userContext";

// Senhas digeridas para testes, apenas.
const senhaTesteAdmin = Crypto.digestStringAsync(
	Crypto.CryptoDigestAlgorithm.SHA256,
	"Muitobom",
);
const senhaTesteUsuario = Crypto.digestStringAsync(
	Crypto.CryptoDigestAlgorithm.SHA256,
	"Naoseiasenha"
)

// Nosso administrador Alomomola.
const admin = {
	user: "Alomomola",
	password: senhaTesteAdmin,
};
// Nosso usuário
const usuarioNormal = {
	user: "Garbodor",
	password: senhaTesteUsuario
};

const Login = () => {
	const [usuario, setUsuario] = useState("");
	const [senha, setSenha] = useState("");
	const { logado, setLogado, adminAqui, setAdminAqui } = useContext(UserContext);
	return (
		<>
			{/* Verificando conexão com a internet, sem ela, lamento... */}
			<OfflineNotice />
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
					className="bg-blue-500 p-5 rounded-md"
					onPress={async () => {
						// Metendo o hash no garoto.
						const estaSenha = await Crypto.digestStringAsync(
							Crypto.CryptoDigestAlgorithm.SHA256,
							senha,
						);
						if (usuario === usuarioNormal.user && estaSenha === (await usuarioNormal.password)) {
							setLogado(true);
						} else if (usuario === admin.user && estaSenha === (await admin.password)) {
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
			</View>
		</>
	);
};

export default Login;
