import { useState } from "react";
import { View, ScrollView, Modal, Alert, StyleSheet } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { fontVariants } from "../utils/fontVariants";
import { MultiSelect } from "react-native-element-dropdown";
import styles from "../components/ui/styles";

const dados = [
	{nome: "Alomomola"},
	{nome: "Garbodor"},
	{nome: "Girafarig"},
	{nome: "Snorlax"},
	{nome: "Armaldo"},
];

/**
 * FEATURE NOVA ABAIXO:
 * BUG: quando seleciona os ajudantes e depois sai da tela e volta novamente,
 * todos ficam selecionados automaticamente.
 */
const ServicoForm = () => {
	const [ajudantesSelecionados, setAjudantesSelecionados] = useState<string[]>(null);
	const [modalConfirmacaoFinal, setModalConfirmacaoFinal] = useState(false);
	const [endereco, setEndereco] = useState("");
	const [bairro, setBairro] = useState("");
	const [valor, setValor] = useState("");
	const [veiculo, setVeiculo] = useState("");
	const [data, setData] = useState(dayjs());
	const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
	const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

	return (
		<ScrollView className="w-full" contentContainerClassName="gap-5 px-8 mb-10">
			<View className="gap-5">
				<Text className="text-left text-3xl" weight="black">
					Cadastro de Serviço
				</Text>
				<Input label="Endereço" onChangeText={setEndereco} value={endereco} />
				<Input label="Bairro" onChangeText={setBairro} value={bairro} />
				<Input label="Valor" onChangeText={setValor} value={valor} />
				<Input label="Veículo" onChangeText={setVeiculo} value={veiculo} />
				<View>
					<Text className="mb-2" weight="medium">
						Data do serviço
					</Text>
					<Button
						className="placeholder:text-black/20 rounded-md border border-black/10 w-full py-4 px-4 text-xl"
						testId="botao-data"
						onPress={() => setMostrarDatePicker(true)}
					>
						<Text className="text-xl text-black" weight="light">
							{data.format("DD/MM/YYYY")}
						</Text>
					</Button>
				</View>
				<View>
					<Text className="mb-2" weight="medium">
						Selecionar ajudantes
					</Text>
					<MultiSelect
						dropdownPosition="top"
						style={styles.dropdown}
						fontFamily={fontVariants.light}
						containerStyle={styles.container}
						search
						data={dados}
						labelField="nome"
						valueField="nome"
						placeholder="Selecione"
						searchPlaceholder="Procurar..."
						value={ajudantesSelecionados}
						onChange={(item) => {
							setAjudantesSelecionados(item);
						}}
					/>
				</View>
				<Button
					className="bg-blue-500 p-4 rounded-md mt-4"
					onPress={() => {
							if (endereco === "" || bairro === "" || valor === "" || veiculo === "" || data == null || ajudantesSelecionados == null) {
								Alert.alert("Você deve preencher todos os campos!");
							} else {
								setMostrarConfirmacao(true);
							}
						}
					}
				>
					<Text className="text-xl text-center text-white" weight="semiBold">
						Cadastrar
					</Text>
				</Button>
				<Modal
					testID="modal-data"
					animationType="slide"
					transparent={false}
					visible={mostrarDatePicker}
					onRequestClose={() => {
						Alert.alert("Data salva!");
						setMostrarDatePicker(!mostrarDatePicker);
					}}
				>
					<View className="mt-10 p-6">
						<DateTimePicker
							calendarTextStyle={{ fontFamily: fontVariants.regular }}
							selectedTextStyle={{ fontFamily: fontVariants.bold }}
							headerTextStyle={{ textTransform: "capitalize" }}
							minDate={dayjs()}
							headerButtonStyle={{
								backgroundColor: "#3b82f6",
								borderRadius: 100,
								padding: 6,
							}}
							headerButtonColor="#fff"
							selectedItemColor="#3b82f6"
							locale={dayjs.locale("pt-br")}
							mode="single"
							date={data}
							onChange={(params) => setData(dayjs(params.date))}
						/>
						<Button
							className="bg-blue-500 p-4 rounded-md mt-4"
							onPress={() => {
								setMostrarDatePicker(!mostrarDatePicker);
							}}
						>
							<Text className="text-lg text-center text-white">Selecionar</Text>
						</Button>
					</View>
				</Modal>
				<Modal
					testID="modal-confirmacao"
					animationType="slide"
					visible={mostrarConfirmacao}
					onRequestClose={() => {
						Alert.alert("Cancelado!");
						setMostrarConfirmacao(false);
					}}
				>
					<View className="mt-10 p-6 gap-5">
						<Text className="text-xl text-center" weight="extraBold">
							Tem certeza do que está fazendo?
						</Text>
						<Text className="text-xl" weight="extraBold">
							-- Dados entrados
						</Text>
						<View className="bg-slate-200 p-5 rounded-md">
							<Text className="text-xl" weight="bold">
								Endereço:
							</Text>
							<Text>{endereco}</Text>
							<Text className="text-xl" weight="bold">
								Bairro:
							</Text>
							<Text>{bairro}</Text>
							<Text className="text-xl" weight="bold">
								Valor:
							</Text>
							<Text>{valor}</Text>
							<Text className="text-xl" weight="bold">
								Veículo:
							</Text>
							<Text>{veiculo}</Text>
							<Text className="text-xl" weight="bold">
								Data:
							</Text>
							<Text>{data.format("DD/MM/YYYY")}</Text>
							<Text className="text-xl" weight="bold">
								Ajudantes:
							</Text>
							<Text>
								{ajudantesSelecionados? ajudantesSelecionados.join(", ") : null}
							</Text>
						</View>
						<View className="gap-2">
							<Button
								className="bg-red-500 p-4 rounded-md mt-4"
								onPress={() => setMostrarConfirmacao(!mostrarConfirmacao)}
							>
								<Text className="text-xl text-center text-white">Cancelar</Text>
							</Button>
							<Button
								className="bg-blue-500 p-4 rounded-md mt-4"
								onPress={() =>setModalConfirmacaoFinal(true)}
							>
								<Text className="text-xl text-center text-white">
									Tenho absoluta certeza!
								</Text>
							</Button>
						</View>
					</View>
				</Modal>
				<Modal
					testID="modal-confirmacao-final"
					animationType="slide"
					visible={modalConfirmacaoFinal}
					onRequestClose={() => {
						Alert.alert("Cancelado!");
						setModalConfirmacaoFinal(false);
					}}
				>
				<View className="gap-5 h-full p-8 justify-center">
					<Text className="text-xl" weight="bold">Deseja mesmo registar o serviço?</Text>
					<Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setModalConfirmacaoFinal(!modalConfirmacaoFinal)}>
						<Text className="text-xl text-center text-white" weight="semiBold">Cancelar</Text>
					</Button>
					<Button className="bg-green-500 p-4 rounded-md mt-4" onPress={() => Alert.alert("Aqui salva no banco de dados.")}>
						<Text className="text-xl text-center text-white" weight="semiBold">Sim, tenho certeza!</Text>
					</Button>
				</View>
			</Modal>
			</View>
		</ScrollView>
	);
};

/*
const styles = StyleSheet.create({
	dropdown: {
		paddingVertical: 16,
		paddingHorizontal: 16,
		backgroundColor: "transparent",
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	container: {
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
});*/

export default ServicoForm;
