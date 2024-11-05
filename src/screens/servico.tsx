import React, { useState } from "react";
import { ScrollView, View, Alert } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import { Calendar, DollarSign } from "lucide-react-native";
import Divider from "../components/ui/divider";
import CardAjudante from "../components/card-ajudante";
import IAjudante from "../interfaces/IAjudante";

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

	return (
		<View className="p-8 w-full">
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
							onLongPress={() => Alert.alert(null, "Efetuar o pagamento?", [
								{
									text: "sim",
									onPress: () => {
										setListaAjudantes(listaAjudantes.filter(item => item.id != ajudante.id));
									}
								},
								{
									text: "não",
									onPress: () => {}
								}
							])}
						/>
					))}
				</ScrollView>
				<Button className="bg-blue-500 p-5 mt-2 rounded-md">
					<Text className="text-center text-white text-lg" weight="semiBold">
						Editar
					</Text>
				</Button>
			</View>
		</View>
	);
};

export default Servico;
