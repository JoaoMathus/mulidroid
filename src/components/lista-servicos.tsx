import { ScrollView } from "react-native";
import type {IServico, IServicoForList} from "../interfaces/IServico";
import CardServico from "./card-servico";
import useNavigation from "../hooks/useNavigation";
import UserContext from "../hooks/userContext";
import { useContext } from "react";

interface ListaServicoProps {
  listaServicos: IServicoForList[]
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
            if (adminAqui) navigate("Servico", {
              serviceId: servico.serviceId
            });
          }}
        />
      ))}
    </ScrollView>
  )
}

export default ListaServicos