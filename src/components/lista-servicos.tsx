import { ScrollView, View } from "react-native";
import type IServico from "../interfaces/IServico";
import CardServico from "./card-servico";
import useNavigation from "../hooks/useNavigation";
import UserContext from "../hooks/userContext";
import { useContext } from "react";

interface ListaServicoProps {
  listaServicos: IServico[]
}

const ListaServicos = ({ listaServicos }: ListaServicoProps) => {
  const { navigate } = useNavigation().navigator;
  const { adminAqui } = useContext(UserContext);

  return (
    <ScrollView
      fadingEdgeLength={100}>
      {listaServicos.map((servico) => (
        <CardServico
          key={servico.serviceId}
          servico={servico}
          onPress={() => {
            // Se for user normal, não pode ver info detalhada do serviço, né?
            if (adminAqui) navigate("Servico");
          }}
        />
      ))}
    </ScrollView>
  )
}

export default ListaServicos