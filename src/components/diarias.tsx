import { View } from 'react-native'
import Text from './ui/text'
import { DollarSign, User } from 'lucide-react-native'

const Diarias = () => {
  return (
    <View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3">
      <View className="gap-8">
        <Text className="text-xl" weight="medium">
          Diárias
        </Text>
        <View className="flex-row items-center">
          <DollarSign size={22} color={"#dc2626"} />
          <Text className="text-xl mt-px">380,00</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <User size={22} color={"#9c9c9c"} />
        <Text className="text-xl">5</Text>
      </View>
    </View>
  )
}

export default Diarias