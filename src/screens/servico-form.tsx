import React from 'react';
import { View, ScrollView, Modal, Alert, Pressable } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

/**
 * 
 * TODO: gerar um alerta para revisar e confirmar os dados.
 */
const ServicoForm = () => {
    const [ajudantesSelecionados, setAjudantesSelecionados] = React.useState([]);
    const [data, setData] = React.useState(dayjs().locale("pt-br"));
    const [mostrarDatePicker, setMostrarDatePicker] = React.useState(false);

    const dados = [
        {key: '1', value: "Alomomola"},
        {key: '2', value: "Garbodor"},
        {key: '3', value: "Girafarig"},
    ]

    return (
        <ScrollView className="mt-10 w-full">
            <View className="gap-5">
                <Text className="text-left text-2xl" weight="black">Cadastro de Serviço</Text>
                <Input label="Endereço" />
                <Input label="Bairro" />
                <Input label="Valor" />
                <Input label="Veículo" />
                <Text className="text-lg text-center text-black" weight="semiBold">
                    Data: {data.format("MMMM-D")}
                </Text>
                <Pressable className="bg-blue-500 p-4 rounded-md mt-4"
                    onPress={() => setMostrarDatePicker(true)}>
                    <Text className="text-lg text-center text-white">Configurar data</Text>
                </Pressable>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={mostrarDatePicker}
                    onRequestClose={() => {
                        Alert.alert("Data salva!");
                        setMostrarDatePicker(!mostrarDatePicker);
                    }}>
                    <View className="mt-10 p-6">
                        <DateTimePicker
                            mode="single"
                            date={data}
                            onChange={(params) => setData(params.date)}
                        />
                        <Pressable className="bg-blue-500 p-4 rounded-md mt-4"
                            onPress={() => { setMostrarDatePicker(!mostrarDatePicker)}}>
                            <Text className="text-lg text-center text-white">Salvar data</Text>
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
                <Button className="bg-blue-500 p-4 rounded-md mt-4">
                    <Text className="text-lg text-center text-white" weight="semiBold">Cadastrar</Text>
                </Button>
            </View>
        </ScrollView>
    )
}

export default ServicoForm;