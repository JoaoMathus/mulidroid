import { View } from 'react-native';
import { DollarSign, Truck } from 'lucide-react-native';
import Text from './ui/text';
import { ServicoAjudanteContext } from '../contexts/ServicoAjudanteContext';
import { useContext } from 'react';

const Faturameto = () => {
  const { servicos } = useContext(ServicoAjudanteContext);

  const faturamentoTotal = servicos.reduce((soma, servico) => soma + servico.value, 0);

  const faturamentoFormatado = Intl.NumberFormat("pt-Br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(faturamentoTotal);

  return (
    <View className="flex-row items-end justify-between border border-zinc-200/70 rounded-md p-3">
      <View className="gap-8">
        <Text className="text-xl" weight="medium">
          Faturamento
        </Text>
        <View className="flex-row items-center">
          <DollarSign size={22} color={"#0E9F6E"} />
          <Text className="text-xl mt-px">{faturamentoFormatado}</Text>
        </View>
      </View>
      <View className="flex-row items-center gap-2">
        <Truck size={22} color={"#9c9c9c"} />
        <Text className="text-xl">{servicos.length}</Text>
      </View>
    </View>
  )
}

export default Faturameto