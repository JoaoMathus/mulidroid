import { ScrollView } from "react-native";
import type { IServico } from "../interfaces/IServico";
import CardServico from "./card-servico";
import useNavigation from "../hooks/useNavigation";
import UserContext from "../hooks/userContext";
import { useContext } from "react";

interface ListaServicoProps {
  listaServicos: IServico[];
  testID?: string;
}

const ListaServicos = ({ listaServicos, testID }: ListaServicoProps) => {
  const { navigate } = useNavigation().navigator;
  const { adminAqui } = useContext(UserContext);

  return (
    <ScrollView
      testID={testID}
      fadingEdgeLength={100}>
      {listaServicos?.map((servico) => (
        <CardServico
          key={servico.id}
          servico={servico}
          onPress={() => {
            if (adminAqui) navigate("Servico", {
              serviceId: servico.id
            });
          }}
        />
      ))}
    </ScrollView>
  )
}

export default ListaServicos