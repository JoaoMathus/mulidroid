import { DollarSign } from "lucide-react-native";
import { ListRenderItemInfo, View } from "react-native"
import Text from "./ui/text";
import IAjudante from "../interfaces/IAjudante";

interface CardAjudanteProps {
  ajudante: ListRenderItemInfo<IAjudante>;
}

const CardAjudante = ({ajudante}: CardAjudanteProps) => {
  return (
    <View className="mb-2 border border-zinc-200/70 rounded-md flex-row justify-between items-center px-3 py-6">
      <Text className="text-xl" weight="semiBold">Alomomola</Text>
      <View className="flex-row items-center">
        <DollarSign size={20} color={"#f44336"} />
        <Text className="text-xl mt-px text-black/80" weight="regular">90,00</Text>
      </View>
    </View>
  )
}

export default CardAjudante;