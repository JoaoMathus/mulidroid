import { View } from "react-native";
import Text from "../components/ui/text";
import Input from "../components/ui/input";
import Button from "../components/ui/button";

const ServicoForm = () => {
    return (
        <View className="mt-10 w-full gap-5">
            <Text className="text-left text-2xl" weight="black">Cadastro de Serviço</Text>
            <Input label="Endereço" />
            <Input label="Valor" />
            <Input label="Data" />
            <Input label="Veículo" />
            <Input label="Selecionar ajudantes" />
            <Button className="bg-blue-500 p-4 rounded-md mt-4">
                <Text className="text-lg text-center text-white" weight="semiBold">Cadastrar</Text>
            </Button>
        </View>
    )
}

export default ServicoForm;