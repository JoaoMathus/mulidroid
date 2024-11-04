import { useState } from "react";
import { View, ScrollView, Modal, Alert, StyleSheet } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { fontVariants } from "../utils/fontVariants";
import { MultiSelect } from "react-native-element-dropdown";

const dados = [
	{ label: "Alomomola", value: "1" },
	{ label: "Garbodor", value: "2" },
	{ label: "Girafarig", value: "3" },
];

const ServicoForm = () => {
	const [ajudantesSelecionados, setAjudantesSelecionados] = useState([]);
	const [data, setData] = useState(dayjs());
	const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
	const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

	return (
		<ScrollView className="w-full" contentContainerClassName="gap-5 p-8 mb-10">
			<View className="gap-5">
				<Text className="text-left text-2xl" weight="black">
					Cadastro de Serviço
				</Text>
				<Input label="Endereço" />
				<Input label="Bairro" />
				<Input label="Valor" />
				<Input label="Veículo" />
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
						fontFamily={fontVariants["light"]}
						containerStyle={styles.container}
						search
						data={dados}
						labelField="label"
						valueField="value"
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
					onPress={() => setMostrarConfirmacao(true)}
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
							calendarTextStyle={{ fontFamily: fontVariants["regular"] }}
							selectedTextStyle={{ fontFamily: fontVariants["bold"] }}
							headerTextStyle={{ textTransform: "capitalize" }}
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
							<Text>Ruínas Sinjoh</Text>
							<Text className="text-xl" weight="bold">
								Bairro:
							</Text>
							<Text>Indeterminado</Text>
							<Text className="text-xl" weight="bold">
								Valor:
							</Text>
							<Text>R$ 100.000,00</Text>
							<Text className="text-xl" weight="bold">
								Veículo:
							</Text>
							<Text>Arceus</Text>
							<Text className="text-xl" weight="bold">
								Data:
							</Text>
							<Text>17/08/2007</Text>
							<Text className="text-xl" weight="bold">
								Ajudantes:
							</Text>
							<Text>
								Typhlosion, Ariados, Dunsparce, Quagsire, Muk, Electabuzz
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
								onPress={() =>
									Alert.alert(
										"Chama função que confirma a mudança no banco local",
									)
								}
							>
								<Text className="text-xl text-center text-white">
									Tenho absoluta certeza!
								</Text>
							</Button>
						</View>
					</View>
				</Modal>
			</View>
		</ScrollView>
	);
};

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
});

export default ServicoForm;
