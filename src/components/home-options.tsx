import { ScrollView, View } from "react-native";
import React from "react";
import Button from "./ui/button";
import Text from "./ui/text";
import { FileUser, LogOut, Truck, User, Wrench } from "lucide-react-native";
import useNavigation from "./hooks/useNavigation";

const HomeOptions = ({ deslogar }) => {

	const { navigate } = useNavigation().navigator;

	return (
		<View className="h-fit mt-3">
			<ScrollView
				showsHorizontalScrollIndicator={false}
				fadingEdgeLength={150}
				className="w-full"
				horizontal
				contentContainerClassName="gap-2"
			>

				<Button
					className="rounded-full items-center"
					onPress={() => navigate("Perfil")}
				>
					<View className="bg-blue-500 shadow-sm items-center justify-center p-4 rounded-full">
						<FileUser color="#fff" />
					</View>
					<Text className="mt-1 text-center w-24 text-black" weight="semiBold">
						Perfil
					</Text>
				</Button>
				<Button
					className="items-center rounded-md"
					onPress={() => navigate("Cadastro de Ajudante")}
				>
					<View className="bg-blue-500 shadow-sm items-center justify-center p-4 rounded-full">
						<User color="#fff" />
					</View>
					<Text className="mt-1 text-center w-24 text-black" weight="semiBold">
						Cadastro de Ajudante
					</Text>
				</Button>
				<Button
					className="rounded-md items-center"
					onPress={() => navigate("Cadastro de Serviço")}
				>
					<View className="bg-blue-500 shadow-sm items-center justify-center p-4 rounded-full">
						<Wrench color="#fff" />
					</View>
					<Text className="mt-1 text-center w-24 text-black" weight="semiBold">
						Cadastro de Serviço
					</Text>
				</Button>
				<Button
					className="rounded-md items-center"
					onPress={() => navigate("Cadastro de Veículo")}
				>
					<View className="bg-blue-500 shadow-sm items-center justify-center p-4 rounded-full">
						<Truck color="#fff" />
					</View>
					<Text className="mt-1 text-center w-24 text-black" weight="semiBold">
						Cadastro de Veículo
					</Text>
				</Button>
				<Button
					className="rounded-md items-center"
					onPress={() => deslogar()}
				>
					<View className="bg-red-500 shadow-sm items-center justify-center p-4 rounded-full">
						<LogOut color="#fff" />
					</View>
					<Text className="mt-1 text-center w-24 text-black" weight="semiBold">
						Sair
					</Text>
				</Button>
			</ScrollView>
		</View>
	);
};

export default HomeOptions;
