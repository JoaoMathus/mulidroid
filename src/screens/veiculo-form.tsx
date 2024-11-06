import React, { useState } from "react";
import { View, Modal, Alert } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

/**
 *
 * Falta implementar os testes.
 */
const VeiculoForm = () => {
	const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
	const [placa, setPlaca] = useState("");
	const [modelo, setModelo] = useState("");
	return (
		<View className="w-full gap-5 p-8">
			<Text className="text-left text-2xl" weight="black">
				Cadastro de Veículos
			</Text>
			<Input label="Placa" onChangeText={setPlaca} value={placa} />
			<Input label="Modelo" onChangeText={setModelo} value={modelo} />
			<Button
				className="bg-blue-500 p-4 rounded-md mt-4"
				onPress={() => {
						if (placa == "" || modelo == "") {
							Alert.alert("Você deve preencher todos os campos!");
						} else {
							setMostrarConfirmacao(true);
						}
					}
				}
			>
				<Text className="text-lg text-center text-white" weight="semiBold">
					Cadastrar
				</Text>
			</Button>
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
							Placa:
						</Text>
						<Text>{placa}</Text>
						<Text className="text-xl" weight="bold">
							Modelo:
						</Text>
						<Text>{modelo}</Text>
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
	);
};

export default VeiculoForm;
