import React, { useEffect, useState } from "react";
import { ScrollView, View, Modal, Alert } from "react-native";
import Button from "../components/ui/button";
import Text from "../components/ui/text";
import { Calendar, Phone } from "lucide-react-native";
import Divider from "../components/ui/divider";
import type { IServico } from "../interfaces/IServico";
import CardServico from "../components/card-servico";
import useNavigation from "../hooks/useNavigation";
import Input from "../components/ui/input";
import dayjs from "dayjs";
import CheckBox from "../components/ui/checkbox";
import type { RootStackParamList } from "../../App";
import { type RouteProp, useRoute } from '@react-navigation/native';
import http from "../http/http";
import type { IAjudante, IAjudanteServices } from "../interfaces/IAjudante";
import ListaServicos from "../components/lista-servicos";
import axios from "axios";

type ServicoRouteProp = RouteProp<RootStackParamList, 'Ajudante'>;

const Ajudante = () => {
	//const [listaServicos, setListaServicos] = useState(servicos);
	const [modalConfirmacaoPagamento, setModalConfirmacaoPagamento] = useState(false);
	const [apelido, setApelido] = useState("");
	const [nome, setNome] = useState("");
	const [telefone, setTelefone] = useState("");
	const [motorista, setMotorista] = useState(false);
	const [modalEditarAjudante, setModalEditarAjudante] = useState(false);
	const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
	const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
	const [modalExcluirAjudante, setModalExcluirAjudante] = useState(false);
	const { navigate } = useNavigation().navigator;

	const [ajudante, setAjudante] = useState<IAjudanteServices>({} as IAjudanteServices)

	const route = useRoute<ServicoRouteProp>();
	const { employeeId } = route.params;

	const buscarAjudante = async () => {
		const res = await http.get<IAjudanteServices>(`employee/${employeeId}`);
		setAjudante(res.data);
	}

	const excluirAjudante = async () => {
		await http.delete<IAjudante>(`employee/${employeeId}`);
		navigate("Home")
	}

	const editarAjudante = async () => {
		try {
			await http.put<IAjudante>(`employee/${employeeId}`, {
				name: nome !== "" ? nome : ajudante.name,
				alias: apelido !== "" ? apelido : ajudante.alias,
				phoneNumber: telefone !== "" ? telefone : ajudante.phoneNumber,
				driver: motorista,

			})
		} catch (erro) {
			Alert.alert(erro)
		} finally {
			navigate("Home");
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		buscarAjudante();
	}, [])

	return (
		<View className="px-5 mb-5 w-full flex-1">
			<View>
				<Button>
					<Text
						className="text-3xl overflow-ellipsis max-w-[320px]"
						weight="black"
					>
						{ajudante.alias}
					</Text>
				</Button>
				<Text className="text-xl">{ajudante.name}</Text>
				<View className="flex-row items-center justify-between gap-1 mt-4">
					<View className="flex-row items-center gap-1">
						<Calendar size={15} color={"#202020"} />
						<Text className="text-black/50 mt-px">{ajudante.birthdate}</Text>
					</View>
					<View className="flex-row items-center gap-1">
						<Phone size={15} color={"#202020"} />
						<Text className="text-black/50 mt-px">{ajudante.phoneNumber}</Text>
					</View>
				</View>
			</View>
			<Divider margin={6} />
			<Text className="text-xl mb-3" weight="bold">
				Serviços
			</Text>
			<View className="flex-1">
				<ScrollView className="h-[352px]">
					<ListaServicos listaServicos={ajudante.services} />
				</ScrollView>
				<View className="flex-row gap-2 justify-center mt-3">
					<Button className="bg-blue-500 p-4 mt-2 rounded-md w-[166px]" onPress={() => setModalEditarAjudante(true)}>
						<Text className="text-center text-white text-lg" weight="semiBold">
							Editar
						</Text>
					</Button>
					<Button className="bg-red-500 p-4 mt-2 rounded-md w-[166px]" onPress={() => setModalExcluirAjudante(true)}>
						<Text className="text-center text-white text-lg" weight="semiBold">
							Excluir
						</Text>
					</Button>
				</View>
			</View>
			<Modal
				testID="modal-confirmacao-final"
				animationType="slide"
				visible={modalConfirmacaoPagamento}
				onRequestClose={() => {
					Alert.alert("Cancelado!");
					setModalConfirmacaoPagamento(false);
				}}
			>
				<View className="gap-5 h-full p-8 justify-center">
					<Text className="text-xl" weight="bold">Deseja mesmo efetuar o pagamento?</Text>
					<Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setModalConfirmacaoPagamento(!modalConfirmacaoPagamento)}>
						<Text className="text-xl text-center text-white" weight="semiBold">Cancelar</Text>
					</Button>
					<Button className="bg-green-500 p-4 rounded-md mt-4" onPress={() => Alert.alert("Aqui salva no banco de dados.")}>
						<Text className="text-xl text-center text-white" weight="semiBold">Sim, tenho certeza!</Text>
					</Button>
				</View>
			</Modal>
			<Modal
				testID="modal-editar-ajudante"
				animationType="slide"
				visible={modalEditarAjudante}
				onRequestClose={() => {
					Alert.alert("Cancelado!");
					setModalEditarAjudante(false);
				}}
			>
				<ScrollView className="w-full mt-10" contentContainerClassName="gap-5 px-8 mb-10 pb-5">
					<Text className="text-left text-3xl" weight="black">Editar informações</Text>
					<Input label="Apelido" onChangeText={setApelido} value={apelido} />
					<Input label="Nome" onChangeText={setNome} value={nome} />
					<Input label="Telefone" onChangeText={setTelefone} value={telefone} />
					<CheckBox onChecked={setMotorista} />
					<Button
						className="bg-blue-500 p-4 rounded-md mt-4"
						onPress={() => {
							setMostrarConfirmacao(true);
						}
						}
					>
						<Text className="text-lg text-center text-white" weight="semiBold">
							Salvar
						</Text>
					</Button>
				</ScrollView>
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
						<Text>{apelido !== "" ? apelido : ajudante.alias}</Text>
						<Text className="text-xl" weight="bold">
							Nome:
						</Text>
						<Text>{nome !== "" ? nome : ajudante.name}</Text>
						<Text className="text-xl" weight="bold">
							Telefone:
						</Text>
						<Text>{telefone !== "" ? telefone : ajudante.phoneNumber}</Text>
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
							onPress={() => editarAjudante()}
						>
							<Text className="text-xl text-center text-white">
								Tenho absoluta certeza!
							</Text>
						</Button>
					</View>
				</View>
			</Modal>
			<Modal
				testID="modal-exluir-ajudante"
				animationType="slide"
				visible={modalExcluirAjudante}
				onRequestClose={() => {
					Alert.alert("Cancelado!");
					setModalExcluirAjudante(false);
				}}
			>
				<View className="gap-5 h-full p-8 justify-center">
					<Text className="text-xl" weight="bold">Deseja mesmo excluir esse ajudante?</Text>
					<Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setModalExcluirAjudante(false)}>
						<Text className="text-xl text-center text-white">Cancelar</Text>
					</Button>
					<Button className="bg-yellow-500 p-4 rounded-md mt-4" onPress={() => { excluirAjudante(); setModalExcluirAjudante(false); }}>
						<Text className="text-xl text-center text-white">Excluir</Text>
					</Button>
				</View>
			</Modal>
		</View>
	);
};

export default Ajudante;
