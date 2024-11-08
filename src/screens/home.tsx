import React, { useContext, useState } from "react";
import { View } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import HomeOptions from "../components/home-options";
import Faturameto from "../components/faturamento";
import Diarias from "../components/diarias";
import ListaServicos from "../components/lista-servicos";
import ListaAjudantes from "../components/lista-ajudantes";
import { ServicoAjudanteContext } from "../contexts/ServicoAjudanteContext";

const TelaHome = () => {
	const { ajudantes, servicos } = useContext(ServicoAjudanteContext);
	const [mostrarServicos, setMostrarServicos] = useState(true);

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
				<ListaServicos listaServicos={servicos} />
			) : (
				<ListaAjudantes listaAjudantes={ajudantes} />)
			}
			<HomeOptions />
		</View>
	);
};

export default TelaHome;
