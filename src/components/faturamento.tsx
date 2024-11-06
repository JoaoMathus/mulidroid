import { View } from 'react-native'
import { DollarSign, Truck } from 'lucide-react-native'
import Text from './ui/text'

const Faturameto = () => {
  return (
    <View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3">
      <View className="gap-8">
        <Text className="text-xl" weight="medium">
          Faturamento
        </Text>
        <View className="flex-row items-center">
          <DollarSign size={22} color={"#0E9F6E"} />
          <Text className="text-xl mt-px">380,00</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <Truck size={22} color={"#9c9c9c"} />
        <Text className="text-xl">4</Text>
      </View>
    </View>
  )
}

export default Faturameto