import React, { useContext, useEffect, useState } from "react";
import { View, Alert, Modal } from "react-native";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import Text from "../components/ui/text";
import OfflineNotice from "../components/offline-notice";
import UserContext from "../hooks/userContext";
import useNavigation from "../hooks/useNavigation";
import http from "../http/http";
import type IUser from "../interfaces/IUser";
import * as LocalAuthentication from "expo-local-authentication";
import LogoMulidroid from "../components/LogoMulidroid";

const Login = () => {
	const [suportaBiometria, setSuportaBiometria] = useState(false);
	const [temBiometria, setTemBiometria] = useState(false);
	const [modalEsqueciASenha, setModalEsqueciASenha] = useState(false);
	const [usuario, setUsuario] = useState("");
	const [senha, setSenha] = useState("");
	const [modalUsername, setModalUsername] = useState("");
	const [modalEmail, setModalEmail] = useState("");
	const { logado, setLogado, adminAqui, setAdminAqui, employeeId, setEmployeeId } = useContext(UserContext);
	const { navigate } = useNavigation().navigator;

	useEffect(() => {
		(async () => {
			const compativel = await LocalAuthentication.hasHardwareAsync();
			setSuportaBiometria(compativel);
		})();
	});

	const logarUsuario =  async () => {
		const res = await http.post<IUser>("user", {
			username: usuario,
			password: senha
		}).then((user) => {
			setEmployeeId(user.data.employeeId);
			setLogado(true);
			setAdminAqui(user.data.admin);
			if (!adminAqui) navigate("Perfil");
		}).catch(() => {
			Alert.alert("Usuário ou senha errada.");
		})
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
			<OfflineNotice />
			<View className="w-full h-full justify-center gap-6 p-8">
				<LogoMulidroid />
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
						<Button onPress={() => setModalEsqueciASenha(true)}>
							<Text className="text-sm text-black/50 underline self-end mt-1">
								Esqueceu a senha ?
							</Text>
						</Button>
					</View>
				</View>
				<Button
					className="bg-blue-500 p-4 rounded-md"
					onPress={async () => {
						await logarUsuario();
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
			<Modal
				visible={modalEsqueciASenha}
				onRequestClose={() => {
					setModalEsqueciASenha(false);
				}}
			>
				<View className="mt-10 p-6 gap-5 h-full justify-center">
					<Input label="Usuário" onChangeText={setModalUsername} value={modalUsername} />
					<Input label="Email" onChangeText={setModalEmail} value={modalEmail} />
					<Button className="bg-blue-500 p-4 mt-10" onPress={() => Alert.alert("Envia email")}>
						<Text className="text-center text-lg text-white" weight="semiBold">Enviar email</Text>
					</Button>
					<Button className="bg-red-500 p-4" onPress={() => setModalEsqueciASenha(false)}>
						<Text className="text-center text-lg text-white">Cancelar</Text>
					</Button>
				</View>
			</Modal>
		</>
	);
};

export default Login;
