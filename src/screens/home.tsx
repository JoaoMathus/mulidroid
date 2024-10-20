import { View, Text, FlatList, StyleSheet } from "react-native";
import { VStack } from "../../components/ui/vstack";
import { Box } from "../../components/ui/box";
import { HStack } from "../../components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";

const styles = StyleSheet.create({
	container: {
		padding: 7,
		marginHorizontal: 10,
		backgroundColor: 'aliceblue',
		borderWidth: 1,
		borderTopLeftRadius: 15,
		borderBottomRightRadius: 15,
		borderStyle: 'dashed'
	}
});

const DADOS_TESTE = [
	{
		id: '1',
		endereco: 'Estrada da Vitória',
		data: '20/10/2024',
		valor: 'R$ 10.000,00'
	},
	{
		id: '2',
		endereco: 'Rota 1',
		data: '1/8/2003',
		valor: 'R$ 10,00'
	},
	{
		id: '3',
		endereco: 'Centro Pokemon, Monte Lua',
		data: '6/12/2013',
		valor: 'R$ 500,00'
	},
]

const Item = ({endereco, data, valor}) => (
	<View className="p-2" style={{
			marginTop: 5,
			borderWidth: 1,
			borderRadius: 10,
			borderStyle: 'dashed'
		}}>
		<Text className="text-2xl p-1">
			Endereço:
			<Text className="text-2xl font-semibold">
				{endereco}
			</Text>
		</Text>
		<Text className="text-2xl">
			Data:
			<Text className="text-2xl font-semibold">
				{data}
			</Text>
		</Text>
		<Text className="text-2xl">
			Valor:
			<Text className="text-2xl font-semibold">
				{valor}
			</Text>
		</Text>
	</View>
);

const TelaHome = () => {
	return (
		<View className="p-4" style={{marginTop: 40}}>
			<VStack space="xl">
				<VStack space="xl">
					<Box style={styles.container}>
						<Text className="text-2xl">
							Faturamento
						</Text>
						<Text className="text-2xl font-semibold">
							R$ 1.000,00
						</Text>
					</Box>
					<Box style={styles.container}>
						<Text className="text-2xl">
							Valor das diárias
						</Text>
						<Text className="text-2xl font-semibold">
							R$ 50,00
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
				<FlatList
					data={DADOS_TESTE}
					renderItem={({item}) => <Item
						endereco={item.endereco}
						data={item.data}
						valor={item.valor} />}
					keyExtractor={item => item.id}
				/>
			</VStack>
		</View>
	)
}

export default TelaHome;