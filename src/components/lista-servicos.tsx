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
  )
}

export default ListaServicos