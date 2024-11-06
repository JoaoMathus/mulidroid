import React, { useState } from "react";
import { View, ScrollView, Modal, Alert } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import CheckBox from "../components/ui/checkbox";
import dayjs from "dayjs";
import DateTimePicker from "react-native-ui-datepicker";
import { fontVariants } from "../utils/fontVariants";

/**
 * Falta implementar o banco remoto.
 * Falta implementar os testes.
 */
const AjudanteForm = () => {
	const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
	const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
	const [data, setData] = useState(dayjs());
	const [apelido, setApelido] = useState("");
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [usuario, setUsuario] = useState("");
	const [motorista, setMotorista] = useState(false);
	return (
		<ScrollView className="w-full" contentContainerClassName="gap-5 p-8 mb-10">
			<Text className="text-left text-3xl" weight="black">
				Cadastro de Ajudante
			</Text>
			<Input label="Apelido" onChangeText={setApelido} value={apelido} />
			<Input label="Nome" onChangeText={setNome} value={nome} />
			<Input label="Email" onChangeText={setEmail} value={email} />
			<Input label="Telefone" onChangeText={setTelefone} value={telefone} />
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
			<Input label="Usuário" onChangeText={setUsuario} value={usuario} />
			<CheckBox onChecked={setMotorista} />
			<Button
				className="bg-blue-500 p-4 rounded-md mt-4"
				onPress={() => setMostrarConfirmacao(true)}
			>
				<Text className="text-lg text-center text-white" weight="semiBold">
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
							Apelido:
						</Text>
						<Text>{apelido}</Text>
						<Text className="text-xl" weight="bold">
							Nome:
						</Text>
						<Text>{nome}</Text>
						<Text className="text-xl" weight="bold">
							Email:
						</Text>
						<Text>{email}</Text>
						<Text className="text-xl" weight="bold">
							Telefone:
						</Text>
						<Text>{telefone}</Text>
						<Text className="text-xl" weight="bold">
							Data de nascimento:
						</Text>
						<Text>{data.format("DD/MM/YYYY")}</Text>
						<Text className="text-xl" weight="bold">
							Usuário:
						</Text>
						<Text>{usuario}</Text>
						<Text className="text-xl" weight="bold">
							É motorista?
						</Text>
						<Text>{motorista ? "Sim" : "Não"}</Text>
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
								Alert.alert(null,
									"Última chance, é isso mesmo que deseja?", [
										{
											text: "sim",
											onPress: () => {
												Alert.alert("Aqui vem uma mensagem de email falando a senha (e vem o id também)");
											}
										},
										{
											text: "não",
											onPress: () => {}
										}
									]
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
		</ScrollView>
	);
};

export default AjudanteForm;
