import React, { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import { DollarSign, Truck, User } from "lucide-react-native";
import CardServico from "../components/card-servico";
import type IServico from "../interfaces/IServico";
import type IAjudante from "../interfaces/IAjudante";
import CardAjudante from "../components/card-ajudante";

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
];

const ajudantes: IAjudante[] = [
	{
		id: '1',
		alias: 'Alomomola',
		name: 'Alomomola da Silva',
		phoneNumber: '(55) 21 99999-9999',
		birthDate: '01/01/1988',
		driver: true
	},
	{
		id: '2',
		alias: 'Garbodor',
		name: 'Garbodor Sludge Bomb',
		phoneNumber: '(55) 21 91111-1111',
		birthDate: '21/03/1998',
		driver: true
	},
	{
		id: '3',
		alias: 'Girafarig',
		name: 'Girafarig Girafales',
		phoneNumber: '(55) 21 92222-2222',
		birthDate: '01/01/1988',
		driver: false
	},
	{
		id: '4',
		alias: 'Mewtwo',
		name: 'Mewtwo Meritocrático',
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
		<ScrollView className="w-full" contentContainerClassName="gap-5 p-8 mb-10">
			<Button
				className="bg-red-500 p-3 grow rounded-md mt-4"
				onPress={() => {
					deslogar();
				}}
			>
				<Text className="text-center text-white" weight="semiBold">
					Sair
				</Text>
			</Button>
			<View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3 mb-4">
				<View className="gap-10">
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
				<View className="gap-10">
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

			<ScrollView
				className="w-full"
				horizontal
				contentContainerClassName="gap-5 my-5 p-2"
			>
				<Button
					className="bg-slate-900 p-3 rounded-md mt-4"
					onPress={() => setMostrarServicos(true)}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Serviços
					</Text>
				</Button>
				<Button
					className="bg-slate-900 p-3 rounded-md mt-4"
					onPress={() => setMostrarServicos(false)}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Ajudantes
					</Text>
				</Button>
				<Button
					className="bg-slate-900 p-3 rounded-md mt-4"
					onPress={() => navigation.navigate("Perfil")}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Perfil
					</Text>
				</Button>
				<Button
					className="bg-slate-900 p-3 rounded-md mt-4"
					onPress={() => navigation.navigate("Cadastro de Ajudante")}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Cadastrar ajudante
					</Text>
				</Button>
				<Button
					className="bg-slate-900 p-3 rounded-md mt-4"
					onPress={() => navigation.navigate("Cadastro de Serviço")}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Cadastrar serviço
					</Text>
				</Button>
				<Button
					className="bg-slate-900 p-3 rounded-md mt-4"
					onPress={() => navigation.navigate("Cadastro de Veículo")}
				>
					<Text className=" text-center text-white" weight="semiBold">
						Cadastrar veículo
					</Text>
				</Button>
			</ScrollView>
			{mostrarServicos ? (<View>
				{listaServicos.map((dado) => (
					<CardServico
						key={dado.id}
						servico={dado}
						onPress={() => {
							navigation.navigate("Servico");
						}}
					/>
				))}
			</View>
			) : (
			<View>
				{listaAjudantes.map((ajudante) => (
					<CardAjudante
						key={ajudante.id}
						ajudante={ajudante}
						onPress={() => {
							navigation.navigate("Ajudante");
						}}
					/>
				))}
			</View>)
			}
		</ScrollView>
	);
};

export default TelaHome;
