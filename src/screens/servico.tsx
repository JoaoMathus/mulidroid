import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import Text from "../components/ui/text";
import Button from "../components/ui/button";
import { Calendar, DollarSign } from "lucide-react-native";
import Divider from "../components/ui/divider";

//TO-DO: CRIAR COMPONENTE CARD PARA O SERVIÇO

const Servico = () => {

  const [expandAddress, setExpandAdress] = useState(1);

  return (
    <View className="p-8 my-auto mt-8">
      <View>
        <Button onPress={() => expandAddress === 1 ? setExpandAdress(2) : setExpandAdress(1)}>
          <Text className="text-3xl overflow-ellipsis max-w-[320px]" lines={expandAddress} weight="black">São José do Vale do Rio Preto</Text>
        </Button>
        <Text className="text-xl">Cascadura</Text>
        <View className="flex-row gap-1 mt-4">
          <Calendar size={15} color={"#202020"} />
          <Text className="text-black/50">26/10/2024</Text>
        </View>
      </View>
      <Divider margin={6} />
      <Text className="text-xl mb-3" weight="bold">Ajudantes</Text>
      <View className="h-full">
        <ScrollView className="max-h-[480px] shadow-lg">
          <View className="mb-2 border border-zinc-200/70 rounded-md flex-row justify-between items-center px-3 py-6">
            <Text className="text-xl" weight="semiBold">Alomomola</Text>
            <View className="flex-row items-center">
              <DollarSign size={20} color={"#f44336"} />
              <Text className="text-xl mt-px text-black/80" weight="regular">90,00</Text>
            </View>
          </View>
        </ScrollView>
        <Button className="bg-blue-500 p-6 mt-2 rounded-md">
          <Text className="text-center text-white" weight="semiBold">Editar</Text>
        </Button>
      </View>
    </View>
  )
}

export default Servico;