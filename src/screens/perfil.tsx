import React from 'react';
import { View, FlatList } from 'react-native';
import Text from "../components/ui/text";
import Button from "../components/ui/button"

const dados = [
    {
        id: '1',
        endereco: 'Centro Pokémon, Monte Lua',
        valor: 'R$ 100,00',
    },
    {
        id: '2',
        endereco: 'Rota 10',
        valor: 'R$ 10,00',
    },
    {
        id: '3',
        endereco: 'Rota 9',
        valor: 'R$ 200,00',
    },
];

const Item = ({endereco, valor}) => (
    <View className="w-full p-3 gap-2 border rounded-md bg-slate-50">
        <Text className="text-xl" weight="bold">{endereco}</Text>
        <Text className="text-xl text-red-500" weight="bold">{valor}</Text>
    </View>
);

/**
 * 
 * Ainda falta pôr rolagem na lista de serviços com pagamento pendente.
 */
const TelaPerfil = () => {
    return (
        <View className="w-full mt-3 gap-2">
            <Text className="text-xl" weight="extraBold">Perfil</Text>
            <Text className="text-5xl" weight="black">Zé Carambola</Text>
            <Text className="text-xl" weight="bold">Alomomola da Silva Silveira</Text>
            <Text className="text-lg" weight="bold">22/04/1987</Text>
            <Text className="text-xl text-center" weight="extraBold">----------------</Text>
            <View>
                <Text className="text-xl mb-5" weight="bold">SERVIÇOS NÃO PAGOS</Text>
                <View className="w-full border rounded-md">
                    <FlatList
                        data={dados}
                        renderItem={({item}) => <Item endereco={item.endereco} valor={item.valor} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View className="w-full gap-5">
                <Button className="bg-blue-500 p-4 rounded-md mt-4">
                    <Text className="text-lg text-center text-white" weight="semiBold">Alterar senha</Text>
                </Button>
                <Button className="bg-blue-500 p-4 rounded-md mt-4">
                    <Text className="text-lg text-center text-white" weight="semiBold">Alterar nome de usuário</Text>
                </Button>
            </View>
        </View>
    )
}

export default TelaPerfil;