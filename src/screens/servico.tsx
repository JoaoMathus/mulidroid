import React, { useState } from "react";
import { ScrollView, View, Alert, Modal } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import { Calendar } from "lucide-react-native";
import Divider from "../components/ui/divider";
import CardAjudante from "../components/card-ajudante";
import type IAjudante from "../interfaces/IAjudante";

const ajudantes: IAjudante[] = [
	{
		id: '1',
		alias: "Alomomola",
		name: "Zé Carambola",
		phoneNumber: "21999999999",
		birthDate: "04/04/2004",
		driver: false,
	},
	{
		id: '2',
		alias: "Garbodor",
		name: "Anderson Linhares",
		phoneNumber: "2177377773",
		birthDate: "26/06/2006",
		driver: false,
	},
	{
		id: '3',
		alias: "Alomomola",
		name: "Zé Carambola",
		phoneNumber: "21999999991",
		birthDate: "04/04/2004",
		driver: false,
	},
	{
		id: '4',
		alias: "Garbodor",
		name: "Anderson Linhares",
		phoneNumber: "21777117777",
		birthDate: "26/06/2006",
		driver: false,
	},
	{
		id: '5',
		alias: "Alomomola",
		name: "Zé Carambola",
		phoneNumber: "21996999999",
		birthDate: "04/04/2004",
		driver: false,
	},
	{
		id: '6',
		alias: "Garbodor",
		name: "Anderson Linhares",
		phoneNumber: "21775777777",
		birthDate: "26/06/2006",
		driver: false,
	},
	{
		id: '7',
		alias: "Alomomola",
		name: "Zé Carambola",
		phoneNumber: "21999299999",
		birthDate: "04/04/2004",
		driver: false,
	},
	{
		id: '8',
		alias: "Garbodor",
		name: "Anderson Linhares",
		phoneNumber: "21737777777",
		birthDate: "26/06/2006",
		driver: false,
	},
];

const Servico = ({ navigation }) => {
	const [expandAddress, setExpandAdress] = useState(1);
	const [listaAjudantes, setListaAjudantes] = useState(ajudantes);
	const [modalConfirmacaoPagamento, setModalConfirmacaoPagamento] = useState(false);

	return (
		<View className="px-8 w-full">
			<View>
				<Button
					onPress={() =>
						expandAddress === 1 ? setExpandAdress(2) : setExpandAdress(1)
					}
				>
					<Text
						className="text-3xl overflow-ellipsis max-w-[320px]"
						lines={expandAddress}
						weight="black"
					>
						São José do Vale do Rio Preto
					</Text>
				</Button>
				<Text className="text-xl">Cascadura</Text>
				<View className="flex-row gap-1 mt-4">
					<Calendar size={15} color={"#202020"} />
					<Text className="text-black/50">26/10/2024</Text>
				</View>
			</View>
			<Divider margin={6} />
			<Text className="text-xl mb-3" weight="bold">
				Ajudantes
			</Text>
			<View className="h-full max-h-[540px]">
				<ScrollView>
					{listaAjudantes.map((ajudante) => (
						<CardAjudante
							key={ajudante.phoneNumber}
							ajudante={ajudante}
							onPress={() => navigation.navigate("Ajudante")}
							onLongPress={() => setModalConfirmacaoPagamento(true)}
						/>
					))}
				</ScrollView>
				<Button className="bg-blue-500 p-5 mt-2 rounded-md">
					<Text className="text-center text-white text-lg" weight="semiBold">
						Editar
					</Text>
				</Button>
			</View>
			<Modal
				testID="modal-confirmacao-final"
				animationType="slide"
				visible={modalConfirmacaoPagamento}
				onRequestClose={() => {
					Alert.alert("Cancelado!");
					setModalConfirmacaoPagamento(false);
				}}
			>
				<View className="gap-5 h-full p-8 justify-center">
					<Text className="text-xl" weight="bold">Deseja mesmo efetuar o pagamento?</Text>
					<Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setModalConfirmacaoPagamento(!modalConfirmacaoPagamento)}>
						<Text className="text-xl text-center text-white" weight="semiBold">Cancelar</Text>
					</Button>
					<Button className="bg-green-500 p-4 rounded-md mt-4" onPress={() => Alert.alert("Aqui salva no banco de dados.")}>
						<Text className="text-xl text-center text-white" weight="semiBold">Sim, tenho certeza!</Text>
					</Button>
				</View>
			</Modal>
		</View>
	);
};

export default Servico;
