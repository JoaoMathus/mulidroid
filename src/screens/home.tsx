import React from 'react';
import { View, FlatList } from 'react-native';
import Text from "../components/ui/text";
import Button from "../components/ui/button"

const dados = [
    {
        id: '1',
        endereco: 'Ilha de Cinnabar',
        valor: 'R$ 100,00',
        data: '11/11/1111',
    },
    {
        id: '2',
        endereco: 'Cidade de Viridiana',
        valor: 'R$ 50,00',
        data: '22/22/2222',
    },
    {
        id: '3',
        endereco: 'Cidade de Anvile',
        valor: 'R$ 25,00',
        data: '33/33/3333',
    },
];

const Item = ({endereco, valor, data}) => (
    <View className="border rounded-md">
        <Text className="text-xl" weight="bold">{endereco}</Text>
        <Text>{valor}</Text>
        <Text>{data}</Text>
    </View>
);

/**
 * 
 * TODO: falta ainda colocar rolagem na lista de serviços
 */
const TelaHome = () => {
    return (
        <View className="w-full mt-5 gap-5">
            <View className="w-full gap-5 border rounded-md p-2">
                <Text className="text-3xl">Faturamento</Text>
                <Text className="text-4xl text-green-800">R$ 100,00</Text>
            </View>
            <View className="w-full gap-5">
                <View className="w-full gap-5 border rounded-md p-2">
                    <Text className="text-3xl">Valor das diárias</Text>
                    <Text className="text-4xl text-green-800">R$ 50,00</Text>
                </View>
            </View>
            <View className="w-full gap-5 flex flex-row ">
                <Button className="bg-blue-500 p-4 grow rounded-md mt-4">
                    <Text className="text-lg text-center text-white" weight="semiBold">Serviços</Text>
                </Button>
                <Button className="bg-blue-500 p-4 grow rounded-md mt-4">
                    <Text className="text-lg text-center text-white" weight="semiBold">Ajudantes</Text>
                </Button>
            </View>
            <View>
                <FlatList
                    data={dados}
                    renderItem={({item}) => <Item endereco={item.endereco} valor={item.valor} data={item.data} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default TelaHome;