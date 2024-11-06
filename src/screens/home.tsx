import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import { DollarSign, Truck, User } from "lucide-react-native";
import CardServico from "../components/card-servico";
import type IServico from "../interfaces/IServico";
import type IAjudante from "../interfaces/IAjudante";
import CardAjudante from "../components/card-ajudante";
import NavigationOptions from "../components/navigation-options";

const servicos: IServico[] = [
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
		address: "Resort de Batalha",
		neighborhood: "Sinnoh",
		value: 1000,
		date: "09/01/1993",
	},
	{
		id: "5",
		address: "Ilha de Cinnabar",
		neighborhood: "Kalos",
		value: 350,
		date: "23/10/2024",
	},
	{
		id: "6",
		address: "Ilha de Cinnabar",
		neighborhood: "Kalos",
		value: 350,
		date: "23/10/2024",
	},
];

const ajudantes: IAjudante[] = [
	{
		id: '1',
		alias: 'Alomomola',
		name: 'Alomomola da Silva',
		username: "-",
		password: "-",
		phoneNumber: '(55) 21 99999-9999',
		birthDate: '01/01/1988',
		driver: true
	},
	{
		id: '2',
		alias: 'Garbodor',
		name: 'Garbodor Sludge Bomb',
		username: "-",
		password: "-",
		phoneNumber: '(55) 21 91111-1111',
		birthDate: '21/03/1998',
		driver: true
	},
	{
		id: '3',
		alias: 'Girafarig',
		name: 'Girafarig Girafales',
		username: "-",
		password: "-",
		phoneNumber: '(55) 21 92222-2222',
		birthDate: '01/01/1988',
		driver: false
	},
	{
		id: '4',
		alias: 'Mewtwo',
		name: 'Mewtwo Meritocrático',
		username: "-",
		password: "-",
		phoneNumber: '(55) 21 93333-3333',
		birthDate: '17/08/1990',
		driver: false
	}
]

/**
 *
 * TODO: falta ainda colocar rolagem na lista de serviços
 */
const TelaHome = ({ deslogar, navigation }) => {
	const [listaServicos, setListaServicos] = useState(servicos);
	const [listaAjudantes, setListaAjudantes] = useState(ajudantes);
	const [mostrarServicos, setMostrarServicos] = useState(true);

	return (
		<View className="w-full p-8 mt-5">
			<View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3 mb-4">
				<View className="gap-8">
					<Text className="text-xl" weight="medium">
						Faturamento
					</Text>
					<View className="flex-row items-center">
						<DollarSign size={22} color={"#0E9F6E"} />
						<Text className="text-xl mt-px">380,00</Text>
					</View>
				</View>
				<View className="flex-row items-center gap-2">
					<Truck size={22} color={"#9c9c9c"} />
					<Text className="text-xl">4</Text>
				</View>
			</View>
			<View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3">
				<View className="gap-8">
					<Text className="text-xl" weight="medium">
						Diárias
					</Text>
					<View className="flex-row items-center">
						<DollarSign size={22} color={"#dc2626"} />
						<Text className="text-xl mt-px">380,00</Text>
					</View>
				</View>
				<View className="flex-row items-center gap-2">
					<User size={22} color={"#9c9c9c"} />
					<Text className="text-xl">5</Text>
				</View>
			</View>
			<View className="flex-row justify-center gap-4 w-full mb-4">
				<Button
					className="bg-blue-500 w-[161px] p-3 rounded-md mt-4"
					onPress={() => setMostrarServicos(true)}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Serviços
					</Text>
				</Button>
				<Button
					className="bg-blue-500 w-[161px] p-3 rounded-md mt-4"
					onPress={() => setMostrarServicos(false)}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Ajudantes
					</Text>
				</Button>
			</View>

			{mostrarServicos ? (
				<ScrollView
					fadingEdgeLength={50}
					className="h-[380px] max-h-[380px]">
					{listaServicos.map((servico) => (
						<CardServico
							key={servico.id}
							servico={servico}
							onPress={() => {
								navigation.navigate("Servico");
							}}
						/>
					))}
				</ScrollView>
			) : (
				<ScrollView
					fadingEdgeLength={50}
					className="h-[380px] max-h-[380px]">
					{listaAjudantes.map((ajudante) => (
						<CardAjudante
							key={ajudante.id}
							ajudante={ajudante}
							onPress={() => {
								navigation.navigate("Ajudante");
							}}
						/>
					))}
				</ScrollView>)
			}
			<NavigationOptions navigation={navigation} deslogar={deslogar} />
		</View>
	);
};

export default TelaHome;
