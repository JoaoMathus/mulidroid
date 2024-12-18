import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View, Alert, Modal } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import { Calendar } from "lucide-react-native";
import Divider from "../components/ui/divider";
import useNavigation from "../hooks/useNavigation";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import Input from "../components/ui/input";
import styles from "../components/ui/styles";
import dayjs from "dayjs";
import { fontVariants } from "../utils/fontVariants";
import DateTimePicker from "react-native-ui-datepicker";
import http from "../http/http";
import type { IServico } from "../interfaces/IServico";
import { type RouteProp, useRoute } from '@react-navigation/native';
import type { RootStackParamList } from "../../App";
import { ServicoAjudanteContext } from "../contexts/ServicoAjudanteContext";
import ListaAjudantes from "../components/lista-ajudantes";
import { VehicleContext } from "../contexts/VehicleContext";

type ServicoRouteProp = RouteProp<RootStackParamList, 'Servico'>;

const Servico = () => {
	const [expandAddress, setExpandAdress] = useState(1);
	const [servico, setServico] = useState<IServico>({} as IServico)
	const [modalConfirmacaoPagamento, setModalConfirmacaoPagamento] = useState(false);
	const [modalEditarServico, setModalEditarServico] = useState(false);
	const [modalExcluir, setModalExcluir] = useState<boolean>(false);
	const [endereco, setEndereco] = useState("");
	const [bairro, setBairro] = useState("");
	const [valor, setValor] = useState("");
	const [veiculo, setVeiculo] = useState(null);
	const [data, setData] = useState(dayjs());
	const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
	const [ajudantesSelecionados, setAjudantesSelecionados] = useState<string[]>(null);
	const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

	const { ajudantes } = useContext(ServicoAjudanteContext);
	const { veiculos } = useContext(VehicleContext);
	const { navigate } = useNavigation().navigator;

	const route = useRoute<ServicoRouteProp>();
	const { serviceId } = route.params;

	const buscarServico = async () => {
		const res = await http.get<IServico>(`service/${serviceId}`)
		setServico(res.data);
		console.log(res.data);
	}

	const excluirServico = async () => {
		try {
			await http.delete<IServico>(`service/${serviceId}`)
		}
		catch (erro) {
			Alert.alert(erro);
		}
		finally {
			navigate("Home")
		}
	}

	const atualizarServico = async () => {
		try {
			await http.put<IServico>(`service/${serviceId}`, {
				address: endereco !== "" ? endereco : servico.address,
			})
		} catch (erro) {
			Alert.alert(erro);
		} finally {
			navigate("Home");
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		buscarServico()
	}, [])

	return (
		<View className="px-5 mb-8 w-full flex-1">
			<View>
				<Button
					onPress={() =>
						expandAddress === 1 ? setExpandAdress(2) : setExpandAdress(1)
					}
				>
					<Text
						className="text-3xl overflow-ellipsis max-w-[320px]"
						lines={expandAddress}
						weight="black"
					>
						{servico.address}
					</Text>
				</Button>
				<Text className="text-xl">{servico.neighborhood}</Text>
				<View className="flex-row gap-1 mt-4">
					<Calendar size={15} color={"#202020"} />
					<Text className="text-black/50">{servico.serviceDate}</Text>
				</View>
			</View>
			<Divider margin={6} />
			<Text className="text-xl mb-3" weight="bold">
				Ajudantes
			</Text>
			<View className="flex-1">
				<ScrollView className="h-[352px]">
					<ListaAjudantes listaAjudantes={servico.employees} idDeServico={servico.id} />
				</ScrollView>
				<Button className="bg-blue-500 p-5 mt-2 rounded-md" onPress={() => setModalEditarServico(true)}>
					<Text className="text-center text-white text-lg" weight="semiBold">
						Editar
					</Text>
				</Button>
				<Button className="bg-red-500 p-5 mt-2 rounded-md" onPress={() => setModalExcluir(true)}>
					<Text className="text-center text-white text-lg" weight="semiBold">
						Excluir
					</Text>
				</Button>
			</View>

			<Modal
				testID="modal-confirmacao-excluir"
				animationType="slide"
				visible={modalExcluir}
				onRequestClose={() => setModalExcluir(false)}
			>
				<View className="gap-5 h-full p-8 justify-center">
					<Text className="text-xl" weight="bold">Deseja mesmo excluir o serviço ?</Text>
					<Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setModalExcluir(!modalExcluir)}>
						<Text className="text-xl text-center text-white" weight="semiBold">Cancelar</Text>
					</Button>
					<Button className="bg-green-500 p-4 rounded-md mt-4" onPress={() => excluirServico()}>
						<Text className="text-xl text-center text-white" weight="semiBold">Sim, tenho certeza!</Text>
					</Button>
				</View>
			</Modal>


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
				testID="modal-editar-servico"
				animationType="slide"
				visible={modalEditarServico}
				onRequestClose={() => {
					Alert.alert("Cancelado!");
					setModalEditarServico(false);
				}}
			>
				<ScrollView className="w-full mt-10" contentContainerClassName="gap-5 px-8 mb-10 pb-5">
					<Text className="text-left text-3xl" weight="black">Editar informações</Text>
					<Input label="Endereço" onChangeText={setEndereco} value={endereco} />
					<Input label="Bairro" onChangeText={setBairro} value={bairro} />
					<Input label="Valor" onChangeText={setValor} value={valor} />
					<Dropdown
						dropdownPosition="top"
						style={styles.dropdown}
						fontFamily={fontVariants.light}
						containerStyle={styles.container}
						search
						data={veiculos}
						labelField="plate"
						valueField="id"
						placeholder="Selecione"
						searchPlaceholder="Procurar..."
						value={veiculo}
						onChange={(item) => {
							setVeiculo(item);
						}}
					/>
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
							data={ajudantes}
							labelField="name"
							valueField="id"
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
							setMostrarConfirmacao(true);
						}
						}
					>
						<Text className="text-xl text-center text-white" weight="semiBold">
							Salvar
						</Text>
					</Button>
				</ScrollView>
			</Modal>


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
						minDate={dayjs()}
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
						onChange={(params) => setData(dayjs())}
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
							{ajudantesSelecionados ? ajudantes?.filter(item => ajudantesSelecionados.includes(item.id)).map(item => item.name).join(", ") : null}
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
							onPress={() => Alert.alert("Atualizado")}
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

export default Servico;

