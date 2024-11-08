import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Text from "../components/ui/text";
import { Calendar } from "lucide-react-native";
import Divider from "../components/ui/divider";
import type IServico from "../interfaces/IServico";
import PerfilOptions from "../components/perfil-options";
import UserContext from "../hooks/userContext";
import ListaServicos from "../components/lista-servicos";
import http from "../http/http";
import type { IAjudante } from "../interfaces/IAjudante";

const TelaPerfil = () => {
	const [servicos, setServicos] = useState<IServico[]>([]);
	const [ajudante, setAjudante] = useState<IAjudante>({} as IAjudante);

	const { adminAqui, employeeId } = useContext(UserContext);

	const buscarInformacaoUsuario = async () => {
		const res = await http.get<IAjudante>(`employee/${employeeId}`);
		setAjudante(res.data);
	}

	const servicosNaoPagos = async () => {
		const res = await http.get<IServico[]>(`service/employee/${employeeId}`);
		setServicos(res.data);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		servicosNaoPagos();
		buscarInformacaoUsuario();
	}, [])

	return (
		<View className={`w-full flex-1 justify-between gap-2 ${!adminAqui ? "mt-10 pt-10" : ""}`}>
			<View className="w-full px-8 flex-1">
				<Text className="text-3xl" weight="black">
					{ajudante.alias}
				</Text>
				<Text className="text-lg">{ajudante.name}</Text>
				<View className="flex-row items-center gap-1">
					<Calendar size={18} color={"#a1a1aa"} />
					<Text className="text-lg mt-[2px] text-zinc-400">{ajudante.birthdate}</Text>
				</View>
				<Divider margin={6} />
				{!adminAqui ? (
					<View className="flex-1">
						<Text className="text-xl mb-2" weight="bold">
							Serviços não pagos
						</Text>
						<View className={"w-full flex-1"}>
							<ListaServicos listaServicos={servicos} />
						</View>
					</View>
				) : (<></>)}
			</View>
			<PerfilOptions />
		</View>
	);
};

export default TelaPerfil;
