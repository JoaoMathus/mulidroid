import { ScrollView, View } from "react-native";
import React, { useContext } from "react";
import Button from "./ui/button";
import Text from "./ui/text";
import { FileUser, LogOut, Truck, User, Wrench } from "lucide-react-native";
import useNavigation from "./hooks/useNavigation";
import UserContext from "./hooks/userContext";

const HomeOptions = () => {

	const { navigate } = useNavigation().navigator;
	const { logado, setLogado, adminAqui, setAdminAqui } = useContext(UserContext);

	return (
		<ScrollView
			showsHorizontalScrollIndicator={false}
			fadingEdgeLength={150}
			className="w-full mb-5"
			horizontal
			contentContainerClassName="gap-2"
		>

			<Button
				className="rounded-full mt-4 items-center"
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
				className="items-center rounded-md mt-4"
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
				className="rounded-md mt-4 items-center"
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
				className="rounded-md items-center mt-4"
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
				className="rounded-md items-center mt-4"
				onPress={() => { setLogado(false); setAdminAqui(false); }}
			>
				<View className="bg-red-500 shadow-sm items-center justify-center p-4 rounded-full">
					<LogOut color="#fff" />
				</View>
				<Text className="mt-1 text-center w-24 text-black" weight="semiBold">
					Sair
				</Text>
			</Button>
		</ScrollView>
	);
};

export default HomeOptions;
