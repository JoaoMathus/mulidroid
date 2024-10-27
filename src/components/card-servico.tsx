import { View } from "react-native"
import Text from "./ui/text"
import { Calendar, DollarSign, User } from "lucide-react-native"
import IServico from "../interfaces/IServico"

interface CardServicoProps {
  servico: IServico;
}

const CardServico = ({servico}: CardServicoProps) => {
  return (
    <View className="flex-row items-center justify-between rounded-md mb-4 p-3 border border-zinc-200/70">
      <View>
        <Text className="" weight="bold">{servico.address}</Text>
        <Text className="text-zinc-600">{servico.neighborhood}</Text>
        <View className="flex-row items-center gap-1 mt-2">
          <Calendar size={15} color={"#a1a1aa"}/>
          <Text className="mt-px text-zinc-400">{servico.date}</Text>
        </View>
      </View>
      <View className="flex-row gap-6 items-center">
        <View className="flex-row items-center gap-px">
          <User size={22} color={"#9c9c9c"}/>
          <Text className="text-lg mt-px">2</Text>
        </View>
        <View className="flex-row items-center gap-px">
          <DollarSign size={20} color={"#0E9F6E"}/>
          <Text className="text-lg mt-px">{servico.value.toFixed(2).replace(".", ",")}</Text>
        </View>
      </View>
    </View>
  )
}

export default CardServico