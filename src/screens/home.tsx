import { View, Text } from "react-native";
import { VStack } from "../../components/ui/vstack";
import { Box } from "../../components/ui/box";
import { HStack } from "../../components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";

const TelaHome = () => {
	return (
		<View className="p-4" style={{marginTop: 30}}>
			<VStack space="xl">
				<VStack space="xl">
					<Box className="p-2 items-center">
						<Text className="text-2xl">
							Faturamento
						</Text>
						<Text className="text-2xl">
							R$ Quantidade
						</Text>
					</Box>
					<Box className="p-2 items-center">
						<Text className="text-2xl">
							Valor das diárias
						</Text>
						<Text className="text-2xl">
							R$ Quantidade
						</Text>
					</Box>
				</VStack>
				<HStack space="xl" style={{justifyContent: 'center'}}>
					<Button size="xl">
						<ButtonText className="mt-1">Serviços</ButtonText>
					</Button>
					<Button size="xl">
						<ButtonText className="mt-1">Ajudantes</ButtonText>
					</Button>
				</HStack>
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