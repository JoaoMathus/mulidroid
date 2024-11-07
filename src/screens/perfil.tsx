import React, { useContext } from "react";
import { View, Modal, Alert, ScrollView } from "react-native";
import Text from "../components/ui/text";
import { Calendar } from "lucide-react-native";
import Divider from "../components/ui/divider";
import CardServico from "../components/card-servico";
import type IServico from "../interfaces/IServico";
import PerfilOptions from "../components/perfil-options";
import UserContext from "../components/hooks/userContext";

const dados: IServico[] = [
	{
		id: "1",
		address: "Ilha de Cinnabar",
		neighborhood: "Kalos",
		value: 350,
		date: "23/10/2024",
	},
	{
		id: "2",
		address: "Ilha dos Macacos",
		neighborhood: "Unova",
		value: 450,
		date: "21/10/2024",
	},
	{
		id: "3",
		address: "Ilha de Viridian",
		neighborhood: "Kanto",
		value: 550,
		date: "27/10/2024",
	},
	{
		id: "4",
		address: "Ilha de Viridian",
		neighborhood: "Kanto",
		value: 550,
		date: "27/10/2024",
	},
	{
		id: "5",
		address: "Ilha de Viridian",
		neighborhood: "Kanto",
		value: 550,
		date: "27/10/2024",
	},
	{
		id: "6",
		address: "Ilha de Viridian",
		neighborhood: "Kanto",
		value: 550,
		date: "27/10/2024",
	},
	{
		id: "7",
		address: "Ilha de Viridian",
		neighborhood: "Kanto",
		value: 550,
		date: "27/10/2024",
	},
];

/**
 *
 * Ainda falta pôr rolagem na lista de serviços com pagamento pendente.
 *
 * FAZER ALTERAÇÕES PARA QUE A LISTA DE SERVIÇOS NESTA TELA NÃO APAREÇA VALOR NEM
 * O NÚMERO DE AJUDANTES
 *
 * Testes:
 * Quando banco estiver implementado:
 *  testar o resgate dos dados do usuário;
 *  testar a lista de serviços não pagos;
 *  testar a modificação de senha,
 *  testar a modificação de nome de usuário.
 */
const TelaPerfil = () => {
	const { logado, setLogado, adminAqui, setAdminAqui } = useContext(UserContext);
	return (
		<View className={`w-full gap-2 ${!adminAqui ? "mt-10 pt-10" : ""}`}>
			<View className="w-full px-8">
				<Text className="text-3xl" weight="black">
					{adminAqui ? ("Administrador") : ("Qualquer nome")}
				</Text>
				<Text className="text-lg">{adminAqui ? ("Nome do administrador") : ("Usuário normal")}</Text>
				<View className="flex-row items-center gap-1">
					<Calendar size={18} color={"#a1a1aa"} />
					<Text className="text-lg mt-[2px] text-zinc-400">{adminAqui ? ("Necessária a data de nascimento?") : ("22/04/1987")}</Text>
				</View>
				<Divider margin={6} />
				{!adminAqui ? (<View>
					<Text className="text-xl mb-2" weight="bold">
						SERVIÇOS NÃO PAGOS
					</Text>
					<View className={"w-full h-[352px]"}>
						<ScrollView fadingEdgeLength={100}>
							{dados.map((servico) => (
								<CardServico key={servico.id} servico={servico} />
							))}
						</ScrollView>
					</View>
				</View>) : (<View></View>)}
			</View>
			<PerfilOptions />
		</View>
	);
};

export default TelaPerfil;
