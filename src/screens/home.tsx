import { View, FlatList } from 'react-native';
import Text from "../components/ui/text";
import Button from "../components/ui/button"
import { DollarSign, Truck, User } from "lucide-react-native";
import CardServico from "../components/card-servico";
import IServico from '../interfaces/IServico';

const dados: IServico[] = [
    {
        id: "1",
        address: "Ilha de Cinnabar",
        neighborhood: "Kalos",
        value: 350,
        date: "23/10/2024"
    },
    {
        id: "2",
        address: "Ilha dos Macacos",
        neighborhood: "Unova",
        value: 450,
        date: "21/10/2024"
    },
    {
        id: "3",
        address: "Ilha de Viridian",
        neighborhood: "Kanto",
        value: 550,
        date: "27/10/2024"
    },
];

/**
 * 
 * TODO: falta ainda colocar rolagem na lista de serviços
 */
const Home = () => {
    return (
        <View className="p-5 mt-10 mb-10">
            <View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3 mb-4">
                <View className="gap-10">    
                    <Text className="text-xl" weight="medium">Faturamento</Text>
                    <View className="flex-row items-center">
                        <DollarSign size={22} color={"#0E9F6E"}/>
                        <Text className="text-xl mt-px">380,00</Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-2">
                    <Truck size={22} color={"#9c9c9c"}/>
                    <Text className="text-xl">4</Text>
                </View>
            </View>
            <View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3">
                <View className="gap-10">    
                    <Text className="text-xl" weight="medium">Diárias</Text>
                    <View className="flex-row items-center">
                        <DollarSign size={22} color={"#dc2626"}/>
                        <Text className="text-xl mt-px">380,00</Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-2">
                    <User size={22} color={"#9c9c9c"}/>
                    <Text className="text-xl">5</Text>
                </View>
            </View>


            <View className="w-full gap-5 flex flex-row mb-4">
                <Button className="bg-blue-500 p-3 grow rounded-md mt-4">
                    <Text className=" text-center text-white" weight="semiBold">Serviços</Text>
                </Button>
                <Button className="bg-blue-500 p-3 grow rounded-md mt-4">
                    <Text className=" text-center text-white" weight="semiBold">Ajudantes</Text>
                </Button>
            </View>
            <View>
                <FlatList
                    data={dados}
                    renderItem={({ item }) => <CardServico servico={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Home;