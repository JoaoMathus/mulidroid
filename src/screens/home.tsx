import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import type IServico from "../interfaces/IServico";
import HomeOptions from "../components/home-options";
import Faturameto from "../components/faturamento";
import Diarias from "../components/diarias";
import ListaServicos from "../components/lista-servicos";
import ListaAjudantes from "../components/lista-ajudantes";
import http from "../http/http";
import type { IAjudanteForList } from "../interfaces/IAjudante";

const TelaHome = () => {
	const [listaServicos, setListaServicos] = useState<IServico[]>([]);
	const [listaAjudantes, setListaAjudantes] = useState<IAjudanteForList[]>([]);
	const [mostrarServicos, setMostrarServicos] = useState(true);

	const buscarServicos = async () => {
		const res = await http.get<IServico[]>("service");
		setListaServicos(res.data);
	}

	const buscarAjudantes = async () => {
		const res = await http.get<IAjudanteForList[]>("employee");
		setListaAjudantes(res.data);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		buscarServicos();
		buscarAjudantes();
	}, []);

	return (
		<View className="gap-4 mt-12 px-5 flex-1">
			<View className="gap-4">
				<Faturameto />
				<Diarias />
			</View>
			<View className="flex-row w-full gap-4">
				<Button className="bg-blue-500 flex-1 p-3 rounded-md" onPress={() => setMostrarServicos(true)}>
					<Text className="text-center text-white" weight="semiBold">
						Serviços
					</Text>
				</Button>
				<Button className="bg-blue-500 flex-1 p-3 rounded-md" onPress={() => setMostrarServicos(false)}>
					<Text className="text-center text-white" weight="semiBold">
						Ajudantes
					</Text>
				</Button>
			</View>
			{mostrarServicos ? (
				<ListaServicos listaServicos={listaServicos} />
			) : (
				<ListaAjudantes listaAjudantes={listaAjudantes} />)
			}
			<HomeOptions />
		</View>
	);
};

export default TelaHome;
