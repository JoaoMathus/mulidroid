import { View, Text } from "react-native";
import { VStack } from "../../components/ui/vstack";
import { Button, ButtonText } from "@/components/ui/button";

const TelaHome = () => {
	return (
		<View className="h-screen justify-center px-8">
			<VStack space="xl">
				<Text className="text-3xl">
					Faturamento
				</Text>
				<Text className="text-3xl">
					R$ Quantidade
				</Text>
				<Text className="text-3xl">
					Valor das diárias
				</Text>
				<Text className="text-3xl">
					R$ Quantidade
				</Text>
				<Button size="x1">
					<ButtonText className="mt-1">Serviços</ButtonText>
				</Button>
				<Button size="x1">
					<ButtonText className="mt-1">Ajudantes</ButtonText>
				</Button>
				<Text className="text-3xl">DEBUG: Será uma lista:</Text>
				<Text className="text-2xl">
					Endereço
				</Text>
				<Text className="text-2xl">
					Data
				</Text>
				<Text className="text-2xl">
					R$ Valor
				</Text>
			</VStack>
		</View>
	)
}

export default TelaHome;