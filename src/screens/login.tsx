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
import cache from "../utils/cache";

const Login = () => {
	const [suportaBiometria, setSuportaBiometria] = useState(false);
	const [temBiometria, setTemBiometria] = useState(false);
	const [modalEsqueciASenha, setModalEsqueciASenha] = useState(false);
	const [usuario, setUsuario] = useState<string>("");
	const [senha, setSenha] = useState<string>("");
	const [modalUsername, setModalUsername] = useState("");
	const [modalEmail, setModalEmail] = useState("");
	const [usouBiometria, setUsouBiometria] = useState(false);
	const { logado, setLogado, adminAqui, setAdminAqui, employeeId, setEmployeeId } = useContext(UserContext);
	const { navigate } = useNavigation().navigator;

	useEffect(() => {
		(async () => {
			const compativel = await LocalAuthentication.hasHardwareAsync();
			setSuportaBiometria(compativel);
		})();
	});

	const logarLocal = async (username: string, password: string, employeeId: string, admin: boolean) => {

		setEmployeeId(employeeId);
		setLogado(true);
		setAdminAqui(admin);
		cache.armazenarUser({username: usuario, password: senha, employeeId: employeeId, admin: admin});
		if (!adminAqui) navigate("Perfil");
	}

	const logarUsuario = async () => {
		try {
			const res = await http.post<IUser>("user", {
				username: usuario,
				password: senha
			});

			setEmployeeId(res.data.employeeId);
			setLogado(true);
			setAdminAqui(res.data.admin);
			cache.armazenarUser({username: usuario, password: senha, employeeId: res.data.employeeId, admin: res.data.admin});
			if (!adminAqui) navigate("Perfil");
		} catch (error) {
			Alert.alert("Usuário ou senha errada!");
		}
	}

	useEffect(() => {
		LocalAuthentication.isEnrolledAsync().then((data) => {
			setTemBiometria(data);
		});
	}, []);

	const temUserNoLocal = async () => {
		const user = await cache.resgatarUser();
		return user != null;
	}

	const autenticarComBiometria = async () => {
		const resultado = await LocalAuthentication.authenticateAsync({
			promptMessage: "Use a biometria"
		});

		if (resultado.success) {
			const user = await cache.resgatarUser();
			await logarLocal(user.username, user.password, user.employeeId, user.admin);
		}
	}

	const verificaSeUsaBiometria = async () => {
		if (suportaBiometria && temBiometria && (await temUserNoLocal()) && !usouBiometria) {
			autenticarComBiometria();
			setUsouBiometria(true);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		verificaSeUsaBiometria();
	}, [suportaBiometria, temBiometria, usouBiometria]);

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
					<Button className="bg-blue-500 p-4 mt-10" onPress={() => {
						Alert.alert("Envia email");
					}}>
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
