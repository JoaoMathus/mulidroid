import { ScrollView, View } from "react-native";
import Button from "../components/ui/button";
import Text from "../components/ui/text";
import { Calendar, Phone } from "lucide-react-native";
import Divider from "../components/ui/divider";
import type IServico from "../interfaces/IServico";
import CardServico from "../components/card-servico";

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
		address: "Ilha dos Macacos",
		neighborhood: "Unova",
		value: 450,
		date: "21/10/2024",
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
		address: "Ilha dos Macacos",
		neighborhood: "Unova",
		value: 450,
		date: "21/10/2024",
	},
	{
		id: "7",
		address: "Ilha de Viridian",
		neighborhood: "Kanto",
		value: 550,
		date: "27/10/2024",
	},
];

const Ajudante = () => {
	return (
		<View className="p-8 w-full">
			<View>
				<Button>
					<Text
						className="text-3xl overflow-ellipsis max-w-[320px]"
						weight="black"
					>
						Zé Carambola
					</Text>
				</Button>
				<Text className="text-xl">Alomomola da Silva Gomes</Text>
				<View className="flex-row items-center justify-between gap-1 mt-4">
					<View className="flex-row items-center gap-1">
						<Calendar size={15} color={"#202020"} />
						<Text className="text-black/50 mt-px">26/10/2024</Text>
					</View>
					<View className="flex-row items-center gap-1">
						<Phone size={15} color={"#202020"} />
						<Text className="text-black/50 mt-px">21 976618540</Text>
					</View>
				</View>
			</View>
			<Divider margin={6} />
			<Text className="text-xl mb-3" weight="bold">
				Serviços
			</Text>
			<View className="h-full max-h-[548px]">
				<ScrollView>
					{dados.map((servico) => (
						<CardServico key={servico.id} servico={servico} />
					))}
				</ScrollView>
				<View className="flex-row gap-2 justify-center mt-3">
					<Button className="bg-blue-500 p-4 mt-2 rounded-md w-[166px]">
						<Text className="text-center text-white text-lg" weight="semiBold">
							Editar
						</Text>
					</Button>
					<Button className="bg-red-500 p-4 mt-2 rounded-md w-[166px]">
						<Text className="text-center text-white text-lg" weight="semiBold">
							Excluir
						</Text>
					</Button>
				</View>
			</View>
		</View>
	);
};

export default Ajudante;
