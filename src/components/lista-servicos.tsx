import { ScrollView, View } from "react-native";
import type IServico from "../interfaces/IServico";
import CardServico from "./card-servico";
import useNavigation from "./hooks/useNavigation";

interface ListaServicoProps {
  listaServicos: IServico[]
}

const ListaServicos = ({listaServicos}: ListaServicoProps) => {
  const { navigate } = useNavigation().navigator;

  return (
    <View className="h-[97%]">
      <ScrollView
        fadingEdgeLength={100}>
        {listaServicos.map((servico) => (
          <CardServico
            key={servico.id}
            servico={servico}
            onPress={() => {
              navigate("Servico");
            }}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default ListaServicos