import { View } from 'react-native'
import Text from './ui/text'
import { DollarSign, User } from 'lucide-react-native'
import { useContext } from 'react'
import { ServicoAjudanteContext } from '../contexts/ServicoAjudanteContext'

const Diarias = () => {

  const { ajudantes } = useContext(ServicoAjudanteContext);

  const numeroDeAjudantesParaPagar = ajudantes.filter((ajudante) => ajudante.servicesCount > 0);

  const diariasTotal = ajudantes.reduce((soma, ajudante) => soma + (ajudante.servicesCount * 90), 0);
  const diariasFormatada = Intl.NumberFormat("pt-Br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(diariasTotal);

  return (
    <View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3">
      <View className="gap-8">
        <Text className="text-xl" weight="medium">
          Diárias
        </Text>
        <View className="flex-row items-center">
          <DollarSign size={22} color={"#dc2626"} />
          <Text className="text-xl mt-px">{diariasFormatada}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <User size={22} color={"#9c9c9c"} />
        <Text className="text-xl">{numeroDeAjudantesParaPagar.length}</Text>
      </View>
    </View>
  )
}

export default Diarias