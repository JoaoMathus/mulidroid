import { useState } from "react";
import { View, ScrollView, Modal, Alert, Pressable } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { fontVariants } from "../utils/fontVariants";

const ServicoForm = () => {
    const [ajudantesSelecionados, setAjudantesSelecionados] = useState([]);
    const [data, setData] = useState(dayjs());
    const [mostrarDatePicker, setMostrarDatePicker] = useState(false);
    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

    const dados = [
        {key: "1", value: "Alomomola"},
        {key: "2", value: "Garbodor"},
        {key: "3", value: "Girafarig"},
    ]

    return (
        <ScrollView className="mt-10 w-full">
            <View className="gap-5">
                <Text className="text-left text-2xl" weight="black">Cadastro de Serviço</Text>
                <Input label="Endereço" />
                <Input label="Bairro" />
                <Input label="Valor" />
                <Input label="Veículo" />
                <Pressable className="bg-blue-500 p-4 rounded-md mt-4"
                    onPress={() => setMostrarDatePicker(true)}>
                    <Text className="text-2xl text-center text-white" weight="extraBold">Configurar data</Text>
                    <Text className="text-xl text-center text-white" weight="bold">
                        Data: {data.format("DD/MM/YYYY")}
                    </Text>
                </Pressable>
                <Modal
                    testID="modal-date-time-picker"
                    animationType="fade"
                    transparent={false}
                    visible={mostrarDatePicker}
                    onRequestClose={() => {
                        Alert.alert("Data salva!");
                        setMostrarDatePicker(!mostrarDatePicker);
                    }}>
                    <View className="mt-10 p-6">
                        <DateTimePicker
                            calendarTextStyle={{fontFamily: fontVariants["regular"]}}
                            selectedTextStyle={{fontFamily: fontVariants["bold"]}}
                            headerTextStyle={{textTransform: "capitalize"}}
                            headerButtonStyle={{backgroundColor: "#3b82f6", borderRadius: 100, padding: 6}}
                            headerButtonColor="#fff"
                            locale={dayjs.locale("pt-br")}
                            mode="single"
                            date={data}
                            onChange={(params) => setData(dayjs(params.date))}
                        />
                        <Pressable className="bg-blue-500 p-4 rounded-md mt-4"
                            onPress={() => { setMostrarDatePicker(!mostrarDatePicker)}}>
                            <Text className="text-lg text-center text-white">Selecionar</Text>
                        </Pressable>
                    </View>
                </Modal>
                <MultipleSelectList
                    setSelected={(valor) => setAjudantesSelecionados(valor)}
                    data={dados}
                    save="value"
                    placeholder="Selecionar ajudantes"
                    search={false}
                />
                <Modal
                    testID="modal-confirmacao"
                    animationType="slide"
                    visible={mostrarConfirmacao}
                    onRequestClose={() => {
                        Alert.alert("Cancelado!");
                    }}
                >
                    <View className="mt-10 p-6 gap-5">
                        <Text className="text-xl text-center" weight="extraBold">Tem certeza do que está fazendo?</Text>
                        <Text className="text-xl" weight="extraBold">-- Dados entrados</Text>
                        <View className="bg-slate-200 p-5 rounded-md">
                            <Text className="text-xl" weight="bold">Endereço:</Text>
                            <Text>Ruínas Sinjoh</Text>
                            <Text className="text-xl" weight="bold">Bairro:</Text>
                            <Text>Indeterminado</Text>
                            <Text className="text-xl" weight="bold">Valor:</Text>
                            <Text>R$ 100.000,00</Text>
                            <Text className="text-xl" weight="bold">Veículo:</Text>
                            <Text>Arceus</Text>
                            <Text className="text-xl" weight="bold">Data:</Text>
                            <Text>17/08/2007</Text>
                            <Text className="text-xl" weight="bold">Ajudantes:</Text>
                            <Text>Typhlosion, Ariados, Dunsparce, Quagsire, Muk, Electabuzz</Text>
                        </View>
                        <View className="gap-2">
                            <Button className="bg-red-500 p-4 rounded-md mt-4" onPress={() => setMostrarConfirmacao(!mostrarConfirmacao)}>
                                <Text className="text-xl text-center text-white">Cancelar</Text>
                            </Button>
                            <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => Alert.alert("Chama função que confirma a mudança no banco local")}>
                                <Text className="text-xl text-center text-white">Tenho absoluta certeza!</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <Button className="bg-blue-500 p-4 rounded-md mt-4" onPress={() => setMostrarConfirmacao(true)}>
                    <Text className="text-xl text-center text-white" weight="semiBold">Cadastrar</Text>
                </Button>
            </View>
        </ScrollView>
    )
}

export default ServicoForm;