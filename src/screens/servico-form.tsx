import React from 'react';
import { View, ScrollView, Alert } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const ServicoForm = () => {
    const [selecionados, setSelecionados] = React.useState([]);

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
                <Input label="Data" />
                <Input label="Veículo" />
                <MultipleSelectList
                    setSelected={(valor) => setSelecionados(valor)}
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